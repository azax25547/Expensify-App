import { createStore } from 'redux';
//Action Generator

const incrementCount = ({incrementBy = 1} = {}) => ({
    type : "INCREMENT",
    incrementBy
})
const decrementCount = ({decrementBy = 1} = {}) => ({
    type : "DECREMENT",
    decrementBy
})

const setCount = () => ({
    type : "SET",
    count : 101
})

const resetCount = () => ({
    type : "RESET"
})

//Reducers
const countReducer = (state = {count : 0}, action) => {
    
    switch(action.type) {
        case "INCREMENT" :
            return {
                count : state.count + action.incrementBy
            }
        case "DECREMENT" :
        
        return {
            count : state.count - action.decrementBy
        }
        case "RESET" :
        return {
            count : 0
        }
        case "SET" :
            return {
                count : action.count
            }
        default : return state
    }
}
const store = createStore(countReducer  )

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy : 10}))

store.dispatch(decrementCount({decrementBy : 100}))

store.dispatch(setCount())

store.dispatch(resetCount())