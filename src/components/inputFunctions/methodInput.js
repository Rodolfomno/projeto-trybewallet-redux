import React from 'react';

export default function methodInput(value, options, onChange) {
  return (
    <label htmlFor="currency">
      <select
        name="method"
        id="method"
        value={ value }
        onChange={ onChange }
        data-testid="method-input"
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
