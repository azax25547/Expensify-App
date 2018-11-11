
//filter Reducer
const filterDefaultState = {
    text: "",
    sortBy: "date",
    start: undefined,
    end: undefined
  }
  export default (state = filterDefaultState, action) => {
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