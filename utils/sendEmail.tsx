export default function sendEmail(userEmail, templateId, data, isAdmin) {
    const adminEmailAddress = [
        process.env.NEXT_PUBLIC_ADMIN_EMAIL_ADDRESS,
        process.env.NEXT_PUBLIC_DEVELOPER_EMAIL_ADDRESS,
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

    return msg;
}
