const liveStartedTemplate = ({ studentName, courseTitle, liveTitle, joinUrl }) => {
const year = new Date().getFullYear();

return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Live Session Started — ${liveTitle}</title>
</head>

<body
    style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
        style="background-color:#f4f4f5;">
        <tr>
            <td align="center" style="padding:32px 16px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                    style="max-width:600px;">

                    <tr>
                        <td align="center"
                            style="background-color:#0f0f0f;border-radius:12px 12px 0 0;padding:28px 40px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td align="center">
                                        <span
                                            style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Take
                                            All You Can</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding-top:4px;">
                                        <span
                                            style="font-size:12px;color:#a1a1aa;letter-spacing:1.5px;text-transform:uppercase;">E-Learning
                                            Platform</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="background-color:#ffffff;padding:40px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">

                                <tr>
                                    <td align="center" style="padding-bottom:28px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                            <tr>
                                                <td
                                                    style="background-color:#dc2626;border-radius:20px;padding:5px 14px;">
                                                    <span
                                                        style="font-size:12px;font-weight:700;color:#ffffff;letter-spacing:1px;text-transform:uppercase;">●
                                                        Live now</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding-bottom:24px;">
                                        <p style="margin:0;font-size:16px;color:#3f3f46;line-height:1.6;">Hi <strong
                                                style="color:#0f0f0f;">${studentName}</strong>,</p>
                                        <p style="margin:12px 0 0;font-size:16px;color:#3f3f46;line-height:1.6;">Your
                                            live session has just started. Join now so you don't miss anything.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding-bottom:28px;">
                                        <div style="height:1px;background-color:#e4e4e7;"></div>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding-bottom:28px;">
                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                                            border="0"
                                            style="background-color:#f9f9fb;border-radius:10px;border:1px solid #e4e4e7;">
                                            <tr>
                                                <td style="padding:24px 28px;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0"
                                                        border="0" style="margin-bottom:14px;">
                                                        <tr>
                                                            <td
                                                                style="background-color:#0f0f0f;border-radius:20px;padding:4px 12px;">
                                                                <span
                                                                    style="font-size:11px;font-weight:600;color:#ffffff;letter-spacing:0.8px;text-transform:uppercase;">Live
                                                                    Session</span>
                                                            </td>
                                                            <td style="padding-left:8px;">
                                                                <span
                                                                    style="font-size:12px;color:#71717a;">${courseTitle}</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <h1
                                                        style="margin:0;font-size:22px;font-weight:700;color:#0f0f0f;line-height:1.3;">
                                                        ${liveTitle}</h1>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <tr>
                                    <td align="center" style="padding-bottom:20px;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                            <tr>
                                                <td style="background-color:#0f0f0f;border-radius:8px;">
                                                    <a href="${joinUrl}"
                                                        style="display:inline-block;padding:16px 40px;font-size:16px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:-0.2px;">Join
                                                        the session →</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <tr>
                                    <td align="center" style="padding-bottom:28px;">
                                        <p style="margin:0;font-size:13px;color:#a1a1aa;line-height:1.6;">The join link
                                            will expire once the session ends.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding-bottom:24px;">
                                        <div style="height:1px;background-color:#e4e4e7;"></div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <p style="margin:0;font-size:15px;color:#3f3f46;line-height:1.6;">See you in
                                            there,<br /><strong style="color:#0f0f0f;">The Take All You Can
                                                Team</strong></p>
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="background-color:#fafafa;border-top:1px solid #e4e4e7;border-radius:0 0 12px 12px;padding:28px 40px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td align="center" style="padding-bottom:12px;">
                                        <a href="${process.env.CLIENT_URL}/support"
                                            style="font-size:13px;color:#71717a;text-decoration:none;margin:0 12px;">Support</a>
                                        <span style="color:#d4d4d8;">|</span>
                                        <a href="${process.env.CLIENT_URL}"
                                            style="font-size:13px;color:#71717a;text-decoration:none;margin:0 12px;">Platform</a>
                                        <span style="color:#d4d4d8;">|</span>
                                        <a href="mailto:contact@takeallyoucan.com"
                                            style="font-size:13px;color:#71717a;text-decoration:none;margin:0 12px;">Contact</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <p style="margin:0;font-size:12px;color:#a1a1aa;line-height:1.6;">© ${year} Take
                                            All You Can. All rights reserved.<br />You're receiving this email because
                                            you're enrolled on our platform.</p>
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

module.exports = liveStartedTemplate;