import React from 'react';

export default function tagInput(value, options, onChange) {
  return (
    <label htmlFor="tag">
      <select
        name="tag"
        id="tag"
        value={ value }
        onChange={ onChange }
        data-testid="tag-input"
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
