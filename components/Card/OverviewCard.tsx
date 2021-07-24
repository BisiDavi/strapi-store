import { FaCartPlus } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { RiMailSendLine } from 'react-icons/ri';

export default function OverviewCard({ data, icon }) {
    function iconType(icon) {
        switch (icon) {
            case 'wig': {
                return {
                    text: 'Total Number of Wigs Sold:',
                    icon: <FaCartPlus className='text-success' size={50} />,
                };
            }
            case 'profile': {
                return {
                    text: 'Total Number of Registered Users:',
                    icon: <CgProfile className='text-success' size={50} />,
                };
            }
            case 'newsletter': {
                return {
                    text: 'Total Number of Newsletter Subsribers:',
                    icon: <RiMailSendLine className='text-success' size={50} />,
                };
            }
        }
    }

    return (
        <>
            <div className='card col-lg-3 col-12 d-flex flex-row align-items-center justify-content-between p-5'>
                <p className='card-text'>{iconType(icon).icon}</p>
                <p
                    className='card-text font-weight-bold'
                    style={{ fontSize: '16px', textAlign: 'center' }}
                >
                    {iconType(icon).text}
                    <span className='text-success'> {data?.length}</span>
                </p>
            </div>
            <style jsx>
                {`
                    .card.col-lg-3.col-12 {
                        box-shadow: -1px 3px 22px 0px rgba(0, 0, 0, 0.2);
                        -webkit-box-shadow: -1px 3px 22px 0px rgba(0, 0, 0, 0.2);
                        -moz-box-shadow: -1px 3px 22px 0px rgba(0, 0, 0, 0.2);
                        border-radius: 5px;
                    }
                `}
            </style>
        </>
    );
}
