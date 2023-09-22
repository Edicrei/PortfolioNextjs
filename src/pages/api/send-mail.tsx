import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.message) {
      return res.status(200).send({ message: 'Bad request' });
    }

    const message = {
      from: data.email,
      to: process.env.SMTP_ADDRESS,
      subject: 'contact - Edicrei Marcondes',
      html: `
      <b>First name and last name: </b>${data.name.replace(/<[^>]+>/g, '')}<br>
      <b>E-mail: </b> ${data.email.replace(/<[^>]+>/g, '')}<br><br>
      <b>message: </b> ${data.message.replace(/<[^>]+>/g, '')}
      `,
    };

    let transporter = nodemailer.createTransport({
      port: process.env.SMTP_PORT,
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.SMTP_ADDRESS,
        pass: process.env.SMTP_PASSWORD,
      },
      secure: true,
    });

    try {
      await transporter.sendMail(message);

      return res.status(200).json({ success: 'Send message' });
    } catch (error) {
      return res.status(400).json({ message: 'Bad request' });
    }
  }
  return res.status(400).json({ message: 'Bad request' });
}
