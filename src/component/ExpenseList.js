import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState.js'
import ExpenseTransaction from './ExpenseTransaction'
 const ExpenseList = () => {
    const { expenseTransactions } = useContext(GlobalContext)
    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul>
                {expenseTransactions.map(expenseTransaction => (
                    
                  <ExpenseTransaction  key ={expenseTransaction.id} expenseTransaction={expenseTransaction}/>
                ))}

            </ul>
        </div>
    );
};
export default ExpenseList