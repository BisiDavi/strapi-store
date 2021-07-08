import nodemailer from 'nodemailer';

export default function CartNotification(req, res) {
    const transporter = nodemailer.createTransport({
        port: 587,
        host: 'smtppro.zoho.com',
        auth: {
            user: 'info@jenjensluxury.com',
            pass: '$Olubisi5256',
        },
        secure: true,
    });

    const mailData = {
        from: "Jenjen's Luxury Wigs",
        to: 'readydevfreelancer@gmail.com',
        subject: `Add to Cart Notification, ${req.body.userName} just added to cart!`,
        html: `<div>${req.body.userName} added ${req.body.cart} to cart, the cost is ${req.body.amount}</div>`,
    };

    transporter.sendMail(mailData, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
    });

    console.log(req.body);
    res.status(200).json('Hello, user');
}
