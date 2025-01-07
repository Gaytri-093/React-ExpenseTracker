import React, { useEffect, useState } from 'react'
import Overview from './Overview'
import Transaction from './Transaction'

const Home = (props) => {
    const [expenses, updateExpense] = useState([]);
    const [expense,updateExpenses] = useState(0);
    const [income,updateIncome] = useState(0);

    const addExpense = (payload)=>{
        const expenseArray = [...expenses];
        expenseArray.push(payload);
        updateExpense(expenseArray);

    }

    const calculateBalance =()=>{
        let expense = 0;
        let income = 0;
        expenses.map((payload)=>{
            payload.type === "EXPENSE" ? (expense=expense+payload.amount ):(income=income+payload.amount)
        })
        updateExpenses(expense);
        updateIncome(income);
    }

    useEffect(()=>calculateBalance(),[expenses]);
  return (
    <div className='text-center w-[100%]'>
     
      <Overview addExpense={addExpense} expense={expense} income={income}/>
      <Transaction expenses={expenses}/>
    </div>
  )
}

export default Home
