//Get visible expenses
export default (expenses,{ text, sortBy, start, end }) => {
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
  