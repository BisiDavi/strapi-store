import nodemailer from 'nodemailer'

export const CartNotification = (req, res) => {
    const transporter = nodemailer.createTransport({});

    console.log(req.body);
}