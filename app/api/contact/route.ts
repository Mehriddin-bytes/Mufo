import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Project Details:
- Service: ${service || 'Not specified'}
- Budget: ${budget || 'Not specified'}

Message:
${message}

---
This email was sent from the Mufo Renovation website contact form.
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Mufo Renovation <onboarding@resend.dev>',
      to: ['mufo.ista@gmail.com'],
      subject: `New Quote Request from ${name}`,
      text: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
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
