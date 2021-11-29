import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generateCurrenciesAPI, getCurrencyAPI } from '../services/fetchAPI';
import currencyInput from './inputFunctions/CurrencyInput';
import descriptionInput from './inputFunctions/DescriptionInput';
import expenseInput from './inputFunctions/ExpenseInput';
import methodInput from './inputFunctions/methodInput';
import tagInput from './inputFunctions/tagInput';
import { setCurrencies, setExpense } from '../actions';

const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class AddExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dispatchCurrencies = this.dispatchCurrencies.bind(this);
    this.generateExpense = this.generateExpense.bind(this);
  }

  componentDidMount() {
    this.dispatchCurrencies();
  }

  async dispatchCurrencies() {
    const { dispatchCurrencies } = this.props;
    const currenciesResults = await generateCurrenciesAPI();
    dispatchCurrencies(currenciesResults);
  }

  async generateExpense() {
    const { expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const id = expenses.length;
    const exchangeRates = await getCurrencyAPI();
    const finalExpense = { id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    return finalExpense;
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { dispatchExpenses } = this.props;
    const finalExpense = await this.generateExpense();
    dispatchExpenses(finalExpense);
    this.setState({
      value: 0,
      description: '',
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <form onSubmit={ this.handleSubmit }>
        { expenseInput(value, this.handleChange) }
        { descriptionInput(description, this.handleChange) }
        { currencyInput(currency, currencies, this.handleChange) }
        { methodInput(method, methods, this.handleChange) }
        { tagInput(tag, tags, this.handleChange) }
        <button type="submit">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: (currencies) => dispatch(setCurrencies(currencies)),
  dispatchExpenses: (expenses) => dispatch(setExpense(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);

AddExpenseForm.propTypes = {
  dispatchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};
