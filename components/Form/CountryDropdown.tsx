import React, { FC, useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import styles from '../../styles/SelectCurrency.module.css';

const CountryDropdownbutton: FC = (): JSX.Element => {
    const [countryState, setCountryState] = useState({
        country: '',
        region: '',
    });

    console.log('countryState', countryState)
    
    const selectCountry = (val) => {
        setCountryState({
            ...countryState,
            country: val,
        });
    };

    const selectRegion = (val) => {
        setCountryState({
            ...countryState,
            region: val,
        });
    };

    const { country, region } = countryState;

    return (
        <div className={styles.countryDropdown}>
            <CountryDropdown
                value={country}
                onChange={(val) => selectCountry(val)}
            />
            <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => selectRegion(val)}
            />
        </div>
    );
};

export default CountryDropdownbutton;
