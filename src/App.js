import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { CurrentBalance } from './components/CurrentBalance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
        <Header></Header>
      <div className="container">
        
        <CurrentBalance></CurrentBalance>
        <IncomeExpense></IncomeExpense>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
     
    </GlobalProvider>
  );
}

export default App;
