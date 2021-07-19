import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

export default async function sendEmail(userEmail, templateId, data, isAdmin) {
    const adminEmailAddress = [
        process.env.NEXT_PUBLIC_ADMIN_EMAIL_ADDRESS,
        process.env.NEXT_PUBLIC_DEVELOPER_EMAIL_ADDRESS,
        'readydevfreelancer@gmail.com',
    ];
    const email = isAdmin ? adminEmailAddress : userEmail;
    const msg = {
        to: email,
        from: {
            email: process.env.NEXT_PUBLIC_SITE_EMAIL_ADDRESS,
            name: "Jenjen's Luxury Wigs",
        },
        templateId: templateId,
        dynamic_template_data: data,
    };

    await sgMail.send(msg);
}
