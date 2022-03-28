import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

const contato = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, subject, message } = req.body;

    sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

    await sendgrid.send({
      to: 'flaviohenrique_santos@hotmail.com',
      from: {
        email: 'flaviohsantos81@gmail.com',
        name: `Portfolio Flavio Santos - ${name}`,
      },
      subject,
      text: message,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(401).json({ err });
  }
};

export default contato;
