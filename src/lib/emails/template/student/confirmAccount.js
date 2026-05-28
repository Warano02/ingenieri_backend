const ConfirmAccount = ({ appName, userName, verificationUrl, expiryHours, urlHelp, urlPrivacy, urlTerms, frontUrl }) => `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<title>Confirmez votre adresse email</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background-color:#f4f3ef;font-family:Arial,sans-serif;font-size:15px;color:#1a1a1a;}
.wrapper{width:100%;background-color:#f4f3ef;padding:40px 16px;}
.container{max-width:580px;margin:0 auto;}
.header{background-color:#0f1117;border-radius:12px 12px 0 0;padding:24px 40px;}
.header img{height:40px;width:auto;display:block;}
.hero{background-color:#1a2236;padding:36px 40px 32px;border-left:3px solid #0f1117;}
.hero-label{font-size:11px;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:#6b93d6;margin-bottom:12px;}
.hero-title{font-size:26px;font-weight:700;color:#f5f5f3;line-height:1.35;}
.body{background-color:#ffffff;padding:40px;}
.greeting{font-size:16px;font-weight:500;color:#1a1a1a;margin-bottom:16px;}
.text{font-size:14.5px;line-height:1.75;color:#4a4a4a;margin-bottom:20px;}
.cta{margin:30px 0 24px;text-align:center;}
.btn{display:inline-block;background-color:#0f1117;color:#ffffff;text-decoration:none;font-family:Arial,sans-serif;font-size:14px;font-weight:500;padding:14px 36px;border-radius:8px;}
.link-box{background-color:#f8f8f6;border:1px solid #e5e5e0;border-radius:8px;padding:16px 20px;margin:8px 0 28px;}
.link-box-label{font-size:11px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:#888;margin-bottom:8px;}
.link-box-url{font-size:12px;color:#2563b8;word-break:break-all;line-height:1.6;font-family:'Courier New',monospace;}
.expiry{background-color:#fef9ec;border:1px solid #f0d97a;border-radius:8px;padding:14px 16px;margin-bottom:28px;}
.expiry-text{font-size:13px;color:#7a5c00;line-height:1.6;}
.divider{height:1px;background-color:#eeede8;margin:28px 0;}
.security{font-size:13px;color:#888;line-height:1.65;}
.signature{margin-top:28px;padding-top:20px;border-top:1px solid #eeede8;font-size:12px;color:#aaa;text-align:right;}
.footer{background-color:#f4f3ef;border-top:1px solid #e5e4de;padding:24px 40px;border-radius:0 0 12px 12px;}
.footer-links{text-align:center;margin-bottom:12px;}
.footer-link{font-size:12px;color:#888;text-decoration:none;margin:0 10px;}
.footer-copy{font-size:11.5px;color:#aaa;text-align:center;line-height:1.7;}
@media only screen and (max-width:600px){.header,.hero,.body,.footer{padding-left:24px;padding-right:24px;}.hero-title{font-size:22px;}}
</style>
</head>
<body>
<div class="wrapper">
<div class="container">
<div class="header">
<img src="${frontUrl}/logo.png" alt="${appName}"/>
</div>
<div class="hero">
<div class="hero-label">Vérification du compte</div>
<div class="hero-title">Confirmez votre adresse email</div>
</div>
<div class="body">
<div class="greeting">Bonjour ${userName},</div>
<p class="text">Merci de vous être inscrit sur <strong>${appName}</strong>. Pour activer votre compte et accéder à l'ensemble de nos ressources pédagogiques, veuillez confirmer votre adresse email en cliquant sur le bouton ci-dessous.</p>
<div class="cta"><a href="${verificationUrl}" class="btn" target="_blank" rel="noopener noreferrer">Confirmer mon adresse email</a></div>
<div class="link-box">
<div class="link-box-label">Ou copiez ce lien dans votre navigateur</div>
<div class="link-box-url">${verificationUrl}</div>
</div>
<div class="expiry">
<div class="expiry-text"><strong>Ce lien est valable ${expiryHours} heures.</strong> Passé ce délai, vous devrez effectuer une nouvelle demande de confirmation depuis la page de connexion.</div>
</div>
<div class="divider"></div>
<p class="security">Si vous n'êtes pas à l'origine de cette inscription, vous pouvez ignorer cet email en toute sécurité. Votre adresse ne sera pas enregistrée sans confirmation de votre part.</p>
<div class="signature">Conçu & développé par <strong>Felix Warano</strong></div>
</div>
<div class="footer">
<div class="footer-links">
<a href="${urlHelp}" class="footer-link">Centre d'aide</a>
<a href="${urlPrivacy}" class="footer-link">Confidentialité</a>
<a href="${urlTerms}" class="footer-link">Conditions d'utilisation</a>
</div>
<div class="footer-copy">© ${new Date().getFullYear()} ${appName} · Tous droits réservés</div>
</div>
</div>
</div>
</body>
</html>`;

module.exports = { ConfirmAccount };