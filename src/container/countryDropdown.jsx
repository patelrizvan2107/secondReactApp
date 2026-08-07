import React from 'react';

function countryDropdown(props) {

    const [country, setCountry] = useState();

    return (
        <div>
            <select>
                <option value="00" onChange = {() => setCountry((country) => country)}>Select Country</option>
                <option value="india">India</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                <option value="uae">UAE</option>
            </select>

            {country}
        </div>
    );
}

export default countryDropdown;