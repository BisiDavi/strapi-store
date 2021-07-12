import nodemailer from 'nodemailer';

export function CheckoutNotification(req, res) {
    const transporter = nodemailer.createTransport({});

    console.log(req.body);
}
