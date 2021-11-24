/* eslint-disable default-case */
import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
