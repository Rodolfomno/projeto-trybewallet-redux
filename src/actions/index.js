export const STATE_EMAIL = 'SET_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const setEmail = (payload) => ({ type: STATE_EMAIL, payload });

export const setExpense = (payload) => ({ type: ADD_EXPENSE, payload });

export const setCurrencies = (payload) => ({ type: SET_CURRENCIES, payload });

export const removeExpense = (payload) => ({ type: REMOVE_EXPENSE, payload });
