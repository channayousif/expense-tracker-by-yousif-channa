import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

//Initial state 
const initialState={
    transactions: [
        /* {id:1, description:"salary", amount:1000},
        {id:2, description:"bill", amount:-100},
        {id:3, description:"salary2", amount:1000},
        {id:4, description:"shopping", amount:-500} */

    ]
}

// create global context
export const GlobalContext = createContext(initialState)

// create provider

export const GlobalProvider =({ children })=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

     // Actions
    function deleteTransaction(id){
    dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
    })};
    
    function addTransaction(transaction){
    dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction
    });
}
    return (<GlobalContext.Provider value={
        {
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}
        >{children}</GlobalContext.Provider>
    )
    }
