import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface Attachment {
  filename: string;
  content: string; // base64 encoded
  type: string;
}

// Service slug to display name mapping
const serviceNames: Record<string, string> = {
  'parking-restoration': 'Parking Structure Restoration',
  'swing-stage-services': 'Swing Stage Services',
  'balcony-restoration': 'Balcony Restoration',
  'masonry-services': 'Masonry Services',
  'stucco-services': 'Stucco Services',
  'high-rise-renovation': 'High-Rise Building Renovation',
  'underground-parking': 'Underground Parking Restoration',
  'interior-exterior': 'Interior & Exterior Finishing',
  'waterproofing': 'Waterproofing Solutions',
};

// Format phone number to (XXX) XXX-XXXX
function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
}

// Format budget for display
function formatBudget(budget: string): string {
  const budgetDisplay: Record<string, string> = {
    '10k-25k': '$10,000 - $25,000',
    '25k-50k': '$25,000 - $50,000',
    '50k-100k': '$50,000 - $100,000',
    '100k+': '$100,000+',
  };
  return budgetDisplay[budget] || budget || 'Not specified';
}

// Get service display name
function getServiceName(slug: string): string {
  return serviceNames[slug] || slug || 'Not specified';
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

    // Get formatted values
    const serviceName = getServiceName(sanitizedService);
    const formattedPhone = formatPhoneNumber(sanitizedPhone);
    const formattedBudget = formatBudget(sanitizedBudget);

    // Format the HTML email content
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%); padding: 32px 40px; text-align: center;">
              <img src="https://muforenovation.ca/logo.png" alt="Mufo Renovation" style="height: 50px; margin-bottom: 16px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Quote Request</h1>
              <p style="color: #d4af37; margin: 8px 0 0 0; font-size: 16px; font-weight: 500;">${serviceName}</p>
            </td>
          </tr>

          <!-- Contact Information Section -->
          <tr>
            <td style="padding: 32px 40px 24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #1e3a5f;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <h2 style="color: #1e3a5f; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Contact Information</h2>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #6b7280; font-size: 13px; display: inline-block; width: 70px;">Name</span>
                          <span style="color: #111827; font-size: 15px; font-weight: 500;">${sanitizedName}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #6b7280; font-size: 13px; display: inline-block; width: 70px;">Email</span>
                          <a href="mailto:${sanitizedEmail}" style="color: #1e3a5f; font-size: 15px; font-weight: 500; text-decoration: none;">${sanitizedEmail}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #6b7280; font-size: 13px; display: inline-block; width: 70px;">Phone</span>
                          <a href="tel:${sanitizedPhone.replace(/\D/g, '')}" style="color: #1e3a5f; font-size: 15px; font-weight: 500; text-decoration: none;">${formattedPhone}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Details Section -->
          <tr>
            <td style="padding: 0 40px 24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #d4af37;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <h2 style="color: #1e3a5f; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Project Details</h2>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #6b7280; font-size: 13px; display: inline-block; width: 70px;">Service</span>
                          <span style="color: #111827; font-size: 15px; font-weight: 500;">${serviceName}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #6b7280; font-size: 13px; display: inline-block; width: 70px;">Budget</span>
                          <span style="color: #d4af37; font-size: 15px; font-weight: 600;">${formattedBudget}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Section -->
          <tr>
            <td style="padding: 0 40px 24px 40px;">
              <h2 style="color: #1e3a5f; margin: 0 0 12px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Message</h2>
              <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
                <p style="color: #374151; margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
              </div>
            </td>
          </tr>

          ${attachments && attachments.length > 0 ? `
          <!-- Attachments Section -->
          <tr>
            <td style="padding: 0 40px 24px 40px;">
              <div style="background-color: #fef3c7; border-radius: 8px; padding: 16px 20px; display: flex; align-items: center;">
                <span style="color: #92400e; font-size: 14px; font-weight: 500;">📎 ${attachments.length} file(s) attached</span>
              </div>
            </td>
          </tr>
          ` : ''}

          <!-- Footer -->
          <tr>
            <td style="background-color: #1e3a5f; padding: 24px 40px; text-align: center;">
              <p style="color: #9ca3af; margin: 0; font-size: 13px;">This quote request was submitted through the Mufo Renovation website contact form.</p>
              <p style="color: #d4af37; margin: 12px 0 0 0; font-size: 13px;">
                <a href="https://muforenovation.ca" style="color: #d4af37; text-decoration: none;">muforenovation.ca</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    // Plain text fallback
    const textContent = `
New Quote Request - ${serviceName}

Contact Information:
• Name: ${sanitizedName}
• Email: ${sanitizedEmail}
• Phone: ${formattedPhone}

Project Details:
• Service: ${serviceName}
• Budget: ${formattedBudget}

Message:
${sanitizedMessage}

${attachments && attachments.length > 0 ? `Attachments: ${attachments.length} file(s) attached` : ''}

---
This email was sent from the Mufo Renovation website contact form.
https://muforenovation.ca
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
      subject: `${serviceName} - Quote Request from ${sanitizedName}`,
      html: htmlContent,
      text: textContent,
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
