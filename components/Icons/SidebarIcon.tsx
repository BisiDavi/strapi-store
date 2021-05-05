import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Mailinglist, SelectCurrencyDropdown } from '..';

const SidebarIcon = (): JSX.Element => {
    const currencyState = useSelector((state) => state.currency);
    const currency = currencyState.name;

    const [mailModal, setMailModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        currency === 'Naira' && setShowDropdown(false);
        currency === 'Dollar' && setShowDropdown(false);
    }, [currency]);
    return (
        <div className='sidebar'>
            <img src='/email.png' onClick={() => setMailModal(true)} />
            <Mailinglist show={mailModal} onHide={() => setMailModal(false)} />
            <div className='currency' onClick={() => setShowDropdown(true)}>
                {currency === 'Naira' ? (
                    <img src='/naira.png' />
                ) : (
                    <img src='/dollar.png' />
                )}
            </div>
            {showDropdown && <SelectCurrencyDropdown />}
            <style jsx>
                {`
                    .sidebar {
                        position: fixed;
                        left: 0px;
                        top: 300px;
                        border: 1px solid black;
                        z-index: 1000;
                    }

                    .sidebar img {
                        height: 50px;
                        width: 50px;
                        margin: 20px 10px;
                    }
                    @media (max-width: 500px) {
                        .sidebar {
                            top: 390px;
                        }
                        .sidebar img {
                            height: 35px;
                            width: 35px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default SidebarIcon;
