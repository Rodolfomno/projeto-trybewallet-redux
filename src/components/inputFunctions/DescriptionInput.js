import React from 'react';

export default function descriptionInput(value, handleChange) {
  return (
    <label htmlFor="description-input">
      <input
        data-testid="description-input"
        type="text"
        name="description"
        title="Descrição:"
        onChange={ handleChange }
        value={ value }
      />
    </label>
  );
}
