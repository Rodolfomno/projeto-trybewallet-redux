import React from 'react';

export default function expenseInput(value, handleChange) {
  return (
    <label htmlFor="value-input">
      <input
        data-testid="value-input"
        type="number"
        name="value"
        title="Despesas:"
        onChange={ handleChange }
        value={ value }
      />
    </label>
  );
}
