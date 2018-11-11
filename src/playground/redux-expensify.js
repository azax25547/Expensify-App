import { createStore, combineReducers } from "redux"
import uuid from "uuid"

//Action Generators
//ADD_EXPENSE
const addExpense = ({
  description = "",
  amount = 0,
  createdAt = 0,
  note = ""
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    amount,
    createdAt,
    note
  }
})
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
})
// EDIT_EXPENSE
const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update
})
// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
})
//  SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
})
//  SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
})
//  SET_START_DATE
const setStartDate = (date = undefined) => ({
  type: "SET_START_DATE",
  date
})
//  SET_END_DATE
const setEndDate = (date = undefined) => ({
  type: "SET_END_DATE",
  date
})

//expense Reducer
const expenseDefaultState = []
const expensesReducer = (state = expenseDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense]
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id
      })
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            amount: action.update
          }
        } else return expense
      })
    default:
      return state
  }
}

//filter Reducer
const filterDefaultState = {
  text: "",
  sortBy: "date",
  start: undefined,
  end: undefined
}
const filtersReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      }
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      }
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" }
    case "SET_START_DATE":
      return { ...state, start: action.date }
    case "SET_END_DATE":
      return { ...state, end: action.date }
    default:
      return state
  }
}
//combineReducer is a function which takes an object which is a argument in which the keys are anyname
// and values are the reducers
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

//Get visible expenses
const getVisibleExpenses = (expenses,{ text, sortBy, start, end }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof start !== 'number' || expense.createdAt >= start;
    const endDateMatch = typeof end !== 'number' || expense.createdAt <= end;
    text = text.toLowerCase()
    const desc = expense.description.toLowerCase()
    const textMatch = desc.includes(text)

    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b) => {
    if(sortBy === 'date') {
      return a.createdAt > b.createdAt ? 1 : -1
    }else if(sortBy === 'amount') {
      return a.amount > b.amount ? 1 : -1
    }
  })
}


//Watch Changes
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})
//Performing Actions
const expenseOne = store.dispatch(
  addExpense({ description: "something", amount: 45666, createdAt : 2000 })
)
const expenseTwo = store.dispatch(
  addExpense({ description: "starbucks", amount: 456, createdAt : 4000})
 )
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
// store.dispatch(setTextFilter("something"))
// store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(0))
// store.dispatch(setEndDate(999))
