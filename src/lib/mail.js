import nodemailder from 'nodemailer';
import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, secure, auth, port } = mailConfig;

    this.transporter = nodemailder.createTransport({
      host,
      secure,
      port,
      auth: auth.user ? auth : null,
    });
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

export default new Mail();
