import nodemailer from 'nodemailer';

export const CartNotification = (req, res) => {
    const p = process.env.MAIL_PASSWORD;
    console.log('password', p);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: 'oludavidconnect@gmail.com',
            pass: process.env.MAIL_PASSWORD,
        },
        secure: true,
    });

    console.log(req.body);
    // res.status(200).json('Hello, user');
};

export default CartNotification;
