import React from 'react';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

export default function Whatsappchat() {
    return (
        <div className='chat'>
            <WhatsAppWidget
                phoneNumber='12674038663'
                textReplyTime='Typically replies within a day'
                companyName="JenJen's Luxury Wig"
            />
            <style jsx>
                {`
                    .chat {
                        position: fixed;
                        z-index: 1000;
                        bottom: 30px;
                        right: -20px;
                    }
                `}
            </style>
        </div>
    );
}
