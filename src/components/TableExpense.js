import React, { Component } from 'react';

class TableExpense extends Component {
  constructor() {
    super();
    this.generateColumns = this.generateColumns.bind(this);
  }

  generateColumns() {
    const columns = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

    return (
      columns.map((item) => (
        <th
          key={ item }
        >
          { item }
        </th>
      ))
    );
  }

  render() {
    return (
      <table
        border="1"
      >
        <thead>
          <tr>
            { this.generateColumns() }
          </tr>
        </thead>
      </table>
    );
  }
}

export default TableExpense;
