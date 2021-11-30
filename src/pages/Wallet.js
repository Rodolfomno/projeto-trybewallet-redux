import React from 'react';
import AddExpenseForm from '../components/AddExpenseForm';
import Header from '../components/Header';
import TableExpense from '../components/TableExpense';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpenseForm />
        <TableExpense />
      </>
    );
  }
}

export default Wallet;
