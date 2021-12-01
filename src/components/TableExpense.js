import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

class TableExpense extends Component {
  constructor() {
    super();
    this.generateColumns = this.generateColumns.bind(this);
    this.removeExpenses = this.removeExpenses.bind(this);
    this.removeButton = this.removeButton.bind(this);
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

  removeExpenses(expenseId) {
    const { removeExpenseById } = this.props;
    removeExpenseById(expenseId);
  }

  removeButton(expenseId) {
    return (
      <td>
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => this.removeExpenses(expenseId) }
        >
          Excluir
        </button>
      </td>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table
        border="1"
      >
        <thead>
          <tr>
            { this.generateColumns() }
          </tr>
        </thead>
        <tbody>
          { expenses.map((expense) => (
            <tr
              key={ expense.id }
            >
              <td>
                { expense.description }
              </td>
              <td>
                { expense.tag }
              </td>
              <td>
                { expense.method }
              </td>
              <td>
                { expense.value }
              </td>
              <td>
                { expense.exchangeRates[expense.currency].name.split('/')[0] }
              </td>
              <td>
                { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
              </td>
              <td>
                { parseFloat(expense.value * expense.exchangeRates[expense.currency]
                  .ask).toFixed(2) }
              </td>
              <td>
                Real
              </td>
              { this.removeButton(expense.id) }
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseById: (state) => dispatch(removeExpense(state)),
});
TableExpense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpenseById: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableExpense);
