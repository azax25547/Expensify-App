import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import { Provider } from 'react-redux'
import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss';

const store = configStore();


store.dispatch(addExpense({description: "water-bill", ammount : 200, createdAt : 1000}))
store.dispatch(addExpense({description: "gas-bill", ammount : 500, createdAt : 2000}))
store.dispatch(setTextFilter("water"))
store.dispatch(setTextFilter("rent"))

const state = store.getState();
var visible = getVisibleExpenses(state.expenses, state.filters)
console.log(visible)

console.log(store.getState())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx ,document.getElementById("app"));
