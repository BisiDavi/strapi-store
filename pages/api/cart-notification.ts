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

    const mailData = {
        from: "Jenjen's Luxury Wigs",
        to: 'oludavidconnect@gmail.com',
        subject: `Add to Cart Notification, ${req.body.userName} just added to cart!`,
        html: `<div>${req.body.userName} added ${req.body.cart} to cart, the cost is ${req.body.amount}</div>`,
    };

    transporter.sendMail(mailData, function(err, info){
        if(err) console.log(err);
        else console.log(info);
    })
    

    console.log(req.body);
    res.status(200).json('Hello, user');
};

export default CartNotification;
