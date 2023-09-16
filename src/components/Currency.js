import React from 'react';

const CurrencyDropdown = ({ setSelectedCurrency }) => {
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className="dropdown">
      {/* <label htmlFor="currency">Currency:</label> */}
      <select className="btn-green" type="button" id="dropdownMenuButton currency" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  onChange={handleCurrencyChange}>
        <option value="$">Currency ($ Dollar)</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;
