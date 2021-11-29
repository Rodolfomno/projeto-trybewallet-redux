import React from 'react';
import AddExpenseForm from '../components/AddExpenseForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpenseForm />
      </>
    );
  }
}

export default Wallet;
