import React from 'react';

export default function currencyInput(value, options, onChange) {
  return (
    <label htmlFor="currency">
      Moeda:
      <select
        name="currency"
        id="currency"
        value={ value }
        onChange={ onChange }
        data-testid="currency-input"
      >
        {
          options.map((option, index) => (

            <option
              key={ index }
              value={ option }
              data-testid={ option }
            >
              { option }
            </option>
          ))
        }
      </select>
    </label>
  );
}
