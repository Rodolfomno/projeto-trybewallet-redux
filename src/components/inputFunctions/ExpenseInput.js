import React from 'react';

export default function expenseInput(value, handleChange) {
  return (
    <label htmlFor="value-input">
      <input
        testid="value-input"
        type="number"
        name="expense"
        title="Despesas:"
        onChange={ handleChange }
        value={ value }
      />
    </label>
  );
}
