import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import styles from '@styles/SelectCurrency.module.css';

export default function CountryDropdownbutton({
    setFormState,
    formState,
    details,
}): JSX.Element {
    console.log('countryState', formState);

    function selectCountry(val) {
        setFormState({
            ...formState,
            country: val,
        });
    }

    function selectRegion(val) {
        setFormState({
            ...formState,
            region: val,
        });
    }
    //const { country, region } = formState;
    function getInputValue(name) {
        const inputValue = details !== null ? details[name] : formState[name];
        return inputValue;
    }
    const countryValue = getInputValue('country');
    const regionValue = getInputValue('region');

    return (
        <div className={styles.countryDropdown}>
            <CountryDropdown
                value={countryValue}
                onChange={(val) => selectCountry(val)}
                priorityOptions={['US', 'NG']}
            />
            <RegionDropdown
                country={countryValue}
                value={regionValue}
                onChange={(val) => selectRegion(val)}
            />
        </div>
    );
}
