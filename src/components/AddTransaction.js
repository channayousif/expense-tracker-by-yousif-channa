import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { Transaction } from './Transaction';

export const AddTransaction = () => {
    const [description, setDescription]=useState('');
    const [amount, setAmount]=useState(0);
   
    const { addTransaction } = useContext(GlobalContext);
    const onSubmit= e => {
        e.preventDefault();
    const newTransaction = {
            id: Math.floor(Math.random()*10000000),
            description,
            amount: +amount
        };
        addTransaction(newTransaction);
    };
    return (
        <div>
             <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
          type="text" 
          value={description} 
          onChange={(e)=>setDescription(e.target.value)} 
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input 
          type="number" 
          value={amount} 
          onChange={(e)=>setAmount(e.target.value)} 
          placeholder="Enter amount..." />
          </div>
        <button className="btn" >Add transaction</button>
      </form> 
      </div>
    )
};
