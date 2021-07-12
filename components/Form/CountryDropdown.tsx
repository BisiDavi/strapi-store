import { FC, useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import styles from '../../styles/SelectCurrency.module.css';

export default function CountryDropdownbutton(): JSX.Element {
    const [countryState, setCountryState] = useState({
        country: '',
        region: '',
    });

    console.log('countryState', countryState);

    function selectCountry(val) {
        setCountryState({
            ...countryState,
            country: val,
        });
    }

    function selectRegion(val) {
        setCountryState({
            ...countryState,
            region: val,
        });
    }

    const { country, region } = countryState;

    return (
        <div className={styles.countryDropdown}>
            <CountryDropdown
                value={country}
                onChange={(val) => selectCountry(val)}
                priorityOptions={['US', 'NG']}
            />
            <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => selectRegion(val)}
            />
        </div>
    );
}
