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
    'under-25k': 'Under $25,000',
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

    // Format the HTML email content - Clean, professional design matching website (forest green #1a3a2f + gold #c9a227)
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb; line-height: 1.6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 48px 24px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color: #ffffff;">

          <!-- Header -->
          <tr>
            <td style="background-color: #1a3a2f; padding: 36px 48px; text-align: center;">
              <img src="https://mufo.ca/logo.png" alt="Mufo Renovation" style="height: 48px; margin-bottom: 20px;">
              <p style="color: #c9a227; margin: 0 0 8px 0; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">New Quote Request</p>
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 400; font-family: Georgia, 'Times New Roman', serif;">${serviceName}</h1>
            </td>
          </tr>

          <!-- Gold accent line -->
          <tr>
            <td style="background-color: #c9a227; height: 3px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 40px 48px;">

              <!-- Client Name -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
                <tr>
                  <td style="padding-bottom: 20px; border-bottom: 1px solid #e5e7eb;">
                    <p style="color: #1a3a2f; margin: 0 0 4px 0; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">Client</p>
                    <p style="color: #111827; margin: 0; font-size: 20px; font-weight: 500;">${sanitizedName}</p>
                  </td>
                </tr>
              </table>

              <!-- Contact Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
                <tr>
                  <td width="50%" style="vertical-align: top; padding-right: 16px;">
                    <p style="color: #6b7280; margin: 0 0 6px 0; font-size: 12px; font-weight: 500;">Email</p>
                    <a href="mailto:${sanitizedEmail}" style="color: #1a3a2f; font-size: 14px; text-decoration: none; word-break: break-all;">${sanitizedEmail}</a>
                  </td>
                  <td width="50%" style="vertical-align: top; padding-left: 16px;">
                    <p style="color: #6b7280; margin: 0 0 6px 0; font-size: 12px; font-weight: 500;">Phone</p>
                    <a href="tel:${sanitizedPhone.replace(/\D/g, '')}" style="color: #1a3a2f; font-size: 14px; text-decoration: none;">${formattedPhone}</a>
                  </td>
                </tr>
              </table>

              <!-- Project Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px; background-color: #f9fafb;">
                <tr>
                  <td width="50%" style="padding: 20px; vertical-align: top;">
                    <p style="color: #6b7280; margin: 0 0 6px 0; font-size: 12px; font-weight: 500;">Service</p>
                    <p style="color: #111827; margin: 0; font-size: 14px; font-weight: 500;">${serviceName}</p>
                  </td>
                  <td width="50%" style="padding: 20px; vertical-align: top; border-left: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; margin: 0 0 6px 0; font-size: 12px; font-weight: 500;">Budget</p>
                    <p style="color: #1a3a2f; margin: 0; font-size: 14px; font-weight: 600;">${formattedBudget}</p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="color: #6b7280; margin: 0 0 12px 0; font-size: 12px; font-weight: 500;">Message</p>
                    <p style="color: #374151; margin: 0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${sanitizedMessage}</p>
                  </td>
                </tr>
              </table>

              ${attachments && attachments.length > 0 ? `
              <!-- Attachments -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 24px;">
                <tr>
                  <td style="padding: 14px 18px; background-color: #f3f4f6; border-left: 3px solid #c9a227;">
                    <p style="color: #374151; margin: 0; font-size: 13px;"><strong>${attachments.length}</strong> file${attachments.length > 1 ? 's' : ''} attached</p>
                  </td>
                </tr>
              </table>
              ` : ''}

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 48px; border-top: 1px solid #e5e7eb;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="color: #9ca3af; margin: 0; font-size: 12px;">Submitted via <a href="https://mufo.ca" style="color: #1a3a2f; text-decoration: none;">mufo.ca</a></p>
                  </td>
                  <td style="text-align: right;">
                    <p style="color: #c9a227; margin: 0; font-size: 12px; font-weight: 600;">Mufo Renovation</p>
                  </td>
                </tr>
              </table>
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
https://mufo.ca
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
