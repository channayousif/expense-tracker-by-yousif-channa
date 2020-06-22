import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';


export const AddTransaction = () => {
    const [description, setDescription]=useState();
    const [amount, setAmount]=useState(1);
    // const [sign, setSign]=useState[1];
   
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
    // setSign(event) {
    // console.log(event.target.value);
    // };
    
    return (
        <div>
             <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
          
        <div className="form-control">
        
            <label htmlFor="description">
              Please write desciption of the transaction <br/>
            </label>
          <input 
          type="text" 
          value={description} 
          onChange={(e)=>setDescription(e.target.value)} 
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br/>
            {
              //(negative - expense, positive - income)
            }
            </label>
          <input 
          type="number" 
          value={amount} 
          onChange={(e)=>setAmount(e.target.value)} 
          placeholder="Enter amount..." />
          </div>
         {// Added radio  button for incom or expense choice 
         }
          <div onChange={(e)=>setAmount(e.target.value * amount)}>

          <label htmlFor="expense">Income or expense?</label><br/>
          <input type="radio" 
              id="income" 
              name="sign" 
              defaultChecked
              value={1} 
              />
            <label htmlFor="income">Income</label><span/>

              <input type="radio" 
              id="expense" 
              name="sign" 
              value={-1} 
              />
            <label htmlFor="expense">Expense</label><br/>
            
              
          </div>
        <button className="btn" >Add transaction</button>
      </form> 
      </div>
    )
};
