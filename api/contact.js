import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const { origin, entity, email, payload } = req.body;

  // Configuration du transporteur via ton compte Google
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Ton adresse Gmail/Workspace
      pass: process.env.GMAIL_APP_PASSWORD // Un mot de passe d'application
    }
  });

  const mailOptions = {
    from: `"Nexus ${origin}" <${process.env.GMAIL_USER}>`,
    to: 'clement@terrilium.org',
    subject: `[${origin}] Nouvelle Liaison : ${entity}`,
    text: `Entité: ${entity}\nEmail: ${email}\n\nMessage:\n${payload}`,
    html: `<b>Entité:</b> ${entity}<br><b>Email:</b> ${email}<br><br><b>Message:</b><p>${payload}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ status: 'success' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
