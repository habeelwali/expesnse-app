import React from 'react';
import Header from './component/Header.js';
import Balance from './component/Balance.js';
import AddTransactions from './component/AddTransactions.js'
import IncomeList from './component/IncomeList.js'
import ExpenseList from './component/ExpenseList.js'
import {GlobalContextProvider} from './context/GlobalState.js'
import Footer from './component/Footer.js';
import './App.css';

function App() {
  return (
    <GlobalContextProvider>
    <div className="container">
 
      <div className="app-wrapper">
     
      <Header/>
        <Balance/>
        <AddTransactions/>
        <IncomeList/>
        <ExpenseList/>  
      
        
      
      </div>
      <Footer/>
    </div>
    </GlobalContextProvider>
  );
}

export default App;
