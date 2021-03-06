import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
    { id: 1, text: 'Flower', amount: -20, date: "2022-01-20" },
    { id: 2, text: 'Salary', amount: 10000, date: "2022-01-19" },
    { id: 3, text: 'Book', amount: -250, date: "2022-01-18" },
    { id: 4, text: 'Camera', amount: 800, date: "2022-01-17" }
  ]
}

// Creating a context
export const GlobalContext = createContext(initialState);

// Provider Component - to make store accessible for the components in our React
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>);
}