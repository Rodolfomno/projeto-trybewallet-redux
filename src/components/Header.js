import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { storedEmail, expenses } = this.props;
    let total = 0;
    console.log(expenses);
    // linhas 11 12 13 inspiradas no codigo Leandro
    expenses.forEach((expense) => {
      const code = expense.currency;
      total += expense.value * expense.exchangeRates[code].ask;
    });

    return (
      <header>
        <p data-testid="email-field">
          User:
          { storedEmail }
        </p>
        <p data-testid="total-field">
          Total expenses:
          { total }
        </p>
        <p data-testid="header-currency-field">
          Currency:
          { }
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  storedEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  storedEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf({
    exchangeRates: PropTypes.any,
    foreach: PropTypes.func,
  }).isRequired,
};
