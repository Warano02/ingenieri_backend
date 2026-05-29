const liveScheduledTemplate = ({ studentName, courseTitle, liveTitle, liveDescription, scheduledDay, instructorName }) => {
    const d = new Date(scheduledDay);
    const dayName = d.toLocaleDateString('en-US', { weekday: 'long' });
    const date = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
    const year = d.getFullYear();

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Live Session Scheduled — ${liveTitle}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;">

          <tr>
            <td align="center" style="background-color:#0f0f0f;border-radius:12px 12px 0 0;padding:28px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <span style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Take All You Can</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:4px;">
                    <span style="font-size:12px;color:#a1a1aa;letter-spacing:1.5px;text-transform:uppercase;">E-Learning Platform</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background-color:#ffffff;padding:40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">

                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0;font-size:16px;color:#3f3f46;line-height:1.6;">Hi <strong style="color:#0f0f0f;">${studentName}</strong>,</p>
                    <p style="margin:12px 0 0;font-size:16px;color:#3f3f46;line-height:1.6;">A new live session has been scheduled for your course. Here's everything you need to know.</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:28px;">
                    <div style="height:1px;background-color:#e4e4e7;"></div>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:28px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f9f9fb;border-radius:10px;border:1px solid #e4e4e7;">
                      <tr>
                        <td style="padding:28px 28px 20px;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:16px;">
                            <tr>
                              <td style="background-color:#0f0f0f;border-radius:20px;padding:4px 12px;">
                                <span style="font-size:11px;font-weight:600;color:#ffffff;letter-spacing:0.8px;text-transform:uppercase;">Live Session</span>
                              </td>
                              <td style="padding-left:8px;">
                                <span style="font-size:12px;color:#71717a;">${courseTitle}</span>
                              </td>
                            </tr>
                          </table>
                          <h1 style="margin:0 0 10px;font-size:22px;font-weight:700;color:#0f0f0f;line-height:1.3;">${liveTitle}</h1>
                          ${liveDescription ? `<p style="margin:0 0 20px;font-size:14px;color:#52525b;line-height:1.7;">${liveDescription}</p>` : ''}
                          <div style="height:1px;background-color:#e4e4e7;margin-bottom:20px;"></div>
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td width="50%" style="padding-bottom:14px;vertical-align:top;">
                                <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#a1a1aa;letter-spacing:0.8px;text-transform:uppercase;">Date</p>
                                <p style="margin:0;font-size:15px;font-weight:600;color:#0f0f0f;">${dayName}, ${date}</p>
                              </td>
                              <td width="50%" style="padding-bottom:14px;vertical-align:top;">
                                <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#a1a1aa;letter-spacing:0.8px;text-transform:uppercase;">Time</p>
                                <p style="margin:0;font-size:15px;font-weight:600;color:#0f0f0f;">${time}</p>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2" style="vertical-align:top;">
                                <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#a1a1aa;letter-spacing:0.8px;text-transform:uppercase;">Instructor</p>
                                <p style="margin:0;font-size:15px;font-weight:600;color:#0f0f0f;">${instructorName}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:28px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#eff6ff;border-radius:8px;border-left:3px solid #3b82f6;">
                      <tr>
                        <td style="padding:14px 18px;">
                          <p style="margin:0;font-size:14px;color:#1d4ed8;line-height:1.6;"><strong>What's next?</strong> You'll receive an email with the join link as soon as the session goes live. Make sure to check your inbox around the scheduled time.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:24px;">
                    <div style="height:1px;background-color:#e4e4e7;"></div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <p style="margin:0;font-size:15px;color:#3f3f46;line-height:1.6;">See you there,<br /><strong style="color:#0f0f0f;">The Take All You Can Team</strong></p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <tr>
            <td style="background-color:#fafafa;border-top:1px solid #e4e4e7;border-radius:0 0 12px 12px;padding:28px 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding-bottom:12px;">
                    <a href="${process.env.CLIENT_URL}/support" style="font-size:13px;color:#71717a;text-decoration:none;margin:0 12px;">Support</a>
                    <span style="color:#d4d4d8;">|</span>
                    <a href="${process.env.CLIENT_URL}" style="font-size:13px;color:#71717a;text-decoration:none;margin:0 12px;">Platform</a>
                    <span style="color:#d4d4d8;">|</span>
                    <a href="mailto:contact@takeallyoucan.com" style="font-size:13px;color:#71717a;text-decoration:none;margin:0 12px;">Contact</a>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p style="margin:0;font-size:12px;color:#a1a1aa;line-height:1.6;">© ${year} Take All You Can. All rights reserved.<br />You're receiving this email because you're enrolled on our platform.</p>
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
</html>`;
};

module.exports = liveScheduledTemplate;