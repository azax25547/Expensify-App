import React from 'react'
import { connect } from 'react-redux';
import ExpenseListItems from './ExpenseListItems'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense,key) => {
      return <ExpenseListItems {...expense} key={key} />
    })}
  </div>
)

const mapStateToProps = (state) => ({
  expenses : state.expenses,
  filters : state.filters
})
export default connect(mapStateToProps)(ExpenseList)
