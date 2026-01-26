import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface Attachment {
  filename: string;
  content: string; // base64 encoded
  type: string;
}

// Sanitize input to prevent XSS and injection attacks
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML/script injection
    .replace(/['";]/g, '') // Remove quotes to prevent SQL injection patterns
    .replace(/--/g, '') // Remove SQL comment syntax
    .replace(/\/\*/g, '') // Remove SQL block comment start
    .replace(/\*\//g, '') // Remove SQL block comment end
    .replace(/\\/g, '') // Remove backslashes
    .trim()
    .slice(0, 5000); // Limit length
}

// Sanitize email specifically (less restrictive but still safe)
function sanitizeEmail(email: string): string {
  if (typeof email !== 'string') return '';
  return email
    .replace(/[<>'";\s]/g, '') // Remove dangerous chars but keep @ and .
    .trim()
    .slice(0, 254); // Max email length per RFC
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, message, attachments } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeEmail(email);
    const sanitizedPhone = sanitizeInput(phone);
    const sanitizedService = sanitizeInput(service || '');
    const sanitizedBudget = sanitizeInput(budget || '');
    const sanitizedMessage = sanitizeInput(message);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check for API key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Format the email content
    const emailContent = `
New Quote Request from Mufo Renovation Website

Contact Information:
- Name: ${sanitizedName}
- Email: ${sanitizedEmail}
- Phone: ${sanitizedPhone}

Project Details:
- Service: ${sanitizedService || 'Not specified'}
- Budget: ${sanitizedBudget || 'Not specified'}

Message:
${sanitizedMessage}

${attachments && attachments.length > 0 ? `\nAttachments: ${attachments.length} file(s) attached` : ''}

---
This email was sent from the Mufo Renovation website contact form.
    `.trim();

    // Prepare attachments for Resend
    const emailAttachments = attachments?.map((att: Attachment) => ({
      filename: att.filename,
      content: Buffer.from(att.content, 'base64'),
    })) || [];

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Mufo Renovation <onboarding@resend.dev>',
      to: ['mufo.ista@gmail.com'],
      subject: `New Quote Request from ${sanitizedName}`,
      text: emailContent,
      replyTo: sanitizedEmail,
      attachments: emailAttachments,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: 'Failed to send email', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
