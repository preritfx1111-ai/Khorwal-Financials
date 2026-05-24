import { NextRequest, NextResponse } from "next/server"

// ─── Email HTML Template ────────────────────────────────────────────────────
function buildEmailHTML(data: {
  name: string
  email: string
  phone: string
  service: string
  message: string
  submittedAt: string
}): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — Khorwal Financials</title>
</head>
<body style="margin:0;padding:0;background-color:#0f172a;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0f172a;padding:40px 16px;">
    <tr>
      <td align="center">
        <!-- Card -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#1e293b;border-radius:16px;overflow:hidden;border:1px solid #334155;">

          <!-- Header stripe -->
          <tr>
            <td style="background:linear-gradient(135deg,#065f46 0%,#047857 50%,#059669 100%);padding:32px 40px;text-align:center;">
              <p style="margin:0 0 4px;font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#a7f3d0;">New Contact Form Enquiry</p>
              <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Khorwal Financials</h1>
              <p style="margin:8px 0 0;font-size:13px;color:#6ee7b7;">AMFI Registered · ARN-154187</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">

              <!-- Intro note -->
              <p style="margin:0 0 28px;font-size:15px;color:#94a3b8;line-height:1.6;">
                A new enquiry has been submitted through the <strong style="color:#34d399;">khorwalfinancials.com</strong> contact form. The details are below.
              </p>

              <!-- Details table -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">

                <!-- Name row -->
                <tr>
                  <td style="padding:14px 16px;background:#0f172a;border-radius:8px 8px 0 0;border-bottom:1px solid #1e293b;">
                    <p style="margin:0 0 3px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#10b981;">Full Name</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#f1f5f9;">${escapeHtml(data.name)}</p>
                  </td>
                </tr>

                <!-- Email row -->
                <tr>
                  <td style="padding:14px 16px;background:#0f172a;border-bottom:1px solid #1e293b;">
                    <p style="margin:0 0 3px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#10b981;">Email Address</p>
                    <a href="mailto:${escapeHtml(data.email)}" style="margin:0;font-size:16px;font-weight:600;color:#34d399;text-decoration:none;">${escapeHtml(data.email)}</a>
                  </td>
                </tr>

                <!-- Phone row -->
                <tr>
                  <td style="padding:14px 16px;background:#0f172a;border-bottom:1px solid #1e293b;">
                    <p style="margin:0 0 3px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#10b981;">Phone Number</p>
                    <a href="tel:${escapeHtml(data.phone)}" style="margin:0;font-size:16px;font-weight:600;color:#f1f5f9;text-decoration:none;">${escapeHtml(data.phone)}</a>
                  </td>
                </tr>

                <!-- Service row -->
                <tr>
                  <td style="padding:14px 16px;background:#0f172a;border-radius:0 0 8px 8px;">
                    <p style="margin:0 0 3px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#10b981;">Service of Interest</p>
                    <p style="margin:0;">
                      <span style="display:inline-block;background:linear-gradient(135deg,#065f46,#047857);color:#a7f3d0;font-size:13px;font-weight:700;padding:4px 14px;border-radius:100px;letter-spacing:0.5px;">${escapeHtml(data.service)}</span>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-top:24px;background:#0f172a;border-radius:8px;padding:20px;border-left:3px solid #10b981;">
                <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#10b981;">Message</p>
                <p style="margin:0;font-size:15px;color:#cbd5e1;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
              </div>

              <!-- CTA buttons -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:32px;">
                <tr>
                  <td align="center" style="padding:0 6px;">
                    <a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;background:linear-gradient(135deg,#059669,#047857);color:#ffffff;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;text-decoration:none;letter-spacing:0.3px;">
                      ✉ Reply to ${escapeHtml(data.name.split(" ")[0])}
                    </a>
                  </td>
                  <td align="center" style="padding:0 6px;">
                    <a href="tel:${escapeHtml(data.phone)}" style="display:inline-block;background:#1e293b;color:#34d399;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;text-decoration:none;letter-spacing:0.3px;border:1px solid #334155;">
                      📞 Call Now
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;background:#0f172a;border-top:1px solid #1e293b;text-align:center;">
              <p style="margin:0 0 4px;font-size:12px;color:#475569;">Submitted on ${data.submittedAt}</p>
              <p style="margin:0;font-size:12px;color:#475569;">
                This email was sent automatically from the contact form at <strong style="color:#64748b;">khorwalfinancials.com</strong>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

// Simple HTML escaping to prevent XSS in email
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// ─── API Route Handler ───────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled." },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    // Read env variables (server-side only — never exposed to client)
    const mailServiceUrl = process.env.MAIL_SERVICE_URL
    const mailServiceKey = process.env.MAIL_SERVICE_KEY

    if (!mailServiceUrl || !mailServiceKey) {
      console.error("Mail service environment variables not configured.")
      return NextResponse.json(
        { success: false, message: "Mail service not configured. Please contact us directly." },
        { status: 503 }
      )
    }

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }) + " IST"

    const emailContent = buildEmailHTML({ name, email, phone, service, message, submittedAt })

    // Call the Mail Sender Service
    const response = await fetch(`${mailServiceUrl}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": mailServiceKey,
      },
      body: JSON.stringify({
        // toEmail: "growmoney1709@gmail.com",
        toEmail: "growmoney1709@gmail.com",
        subject: `New Enquiry — ${service} | ${name}`,
        fromName: "Khorwal Financials Website",
        replyTo: email,
        emailContent,
      }),
    })

    const result = await response.json()

    if (!response.ok || !result.success) {
      console.error("Mail service error:", result)
      return NextResponse.json(
        { success: false, message: "Failed to send your message. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
    })
  } catch (error: any) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or contact us directly." },
      { status: 500 }
    )
  }
}
