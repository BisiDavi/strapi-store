import nodemailer from 'nodemailer';

export const CheckoutNotification = (req, res) => {
    const transporter = nodemailer.createTransport({});

    console.log(req.body);
};
