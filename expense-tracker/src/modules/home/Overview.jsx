import React, { useState } from "react";

const AddTransactionView = (props) => {
    // state management
    const [title, setTitle] = useState();
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();
    const [type, setType] = useState("EXPENSE");
    
    const addExpense =()=>{
        props.addExpense({amount:Number(amount), title, date, type, id: Date.now()});
        console.log({amount:Number(amount), title, date, type, id: Date.now()});
        props.setAddTxnVisible()
       
    }
  return (
    <div className="flex flex-col gap-2 p-4 m-2 w-[60%] shadow-lg"> 

      <input type="text" 
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="border p-1 focus:ring-2 focus:ring-green-400 rounded-lg outline-none text-[16px]" />

      <input type="number" placeholder="Amount"
       value={amount}
        onChange={(e)=>setAmount(e.target.value)} 
        className="border p-1 focus:ring-2 focus:ring-green-400 rounded-lg outline-none text-[16px]" />

      <input type="date"
       value={date} 
       onChange={(e)=> setDate(e.target.value)}
       className="border p-1 focus:ring-2 focus:ring-green-400 rounded-lg outline-none text-[16px]" />

{/* category */}
      <div className="flex flex-row gap-4 justify-start items-center mt-1">

     <div className=" flex gap-1 text-[16px]">
     <input type="radio"
      id="expense" 
      name='type' 
      value="EXPENSE"
      checked={type === "EXPENSE"} 
      onChange={(e)=> setType(e.target.value)}/>
     <label htmlFor="expense"  >Expense</label>
     </div>

      <div className=" flex gap-1 text-[16px]">
      <input type="radio" 
      id="income" 
      name='type' 
      value="INCOME" 
      checked={type === "INCOME"}
      onChange={(e) => setType(e.target.value)} />
      <label htmlFor="income">Income</label>
     
      </div>

     

      </div>
      <div>
          <button onClick={addExpense} className="bg-green-500 text-white rounded-sm px-12 py-1 w-full">Add Expense</button>
      </div>
    </div>
  );
};

const Overview = (props) => {
  const [isAddTxnVisible, setAddTxnVisible] = useState(false); 
  return (
    <div className="flex flex-col items-center justify-center w-[100%] ">
      <div className="flex flex-row gap-6"> 
        <p className=" text-xl mt-[5px]">
          Balance : <span className="text-green-600">${props.income - props.expense}</span>
        </p>
        <button
          onClick={() => setAddTxnVisible(!isAddTxnVisible)} 
          className="bg-green-500 text-white px-4 rounded p-1.5 mt-1 text-[14px] "
        >
          {isAddTxnVisible ? "Cancel" : "ADD"}
        </button>
      </div>
      {isAddTxnVisible && (<AddTransactionView setAddTxnVisible={setAddTxnVisible} addExpense={props.addExpense} />)}
{/* Expense-Container */}
      <div className="expense-container w-[100%] items-center justify-center flex flex-row gap-8 mt-2">
        <div className="shadow-xl px-10 py-4 items-center justify-center border-2 " isIncome={false}>
            <p className="text-xl">Expense </p>
            <span className="font-bold text-red-600 text-[20px]"> ${props.expense}</span>
        </div>

        <div className="shadow-xl px-10 py-4 items-center justify-center border-2 " isIncome={true}>
            <p className="text-xl">Income</p>
            <span className="font-bold text-green-600 text-[20px]"> ${props.income}</span>
        </div>

      </div>

    </div>
  );
};  

export default Overview;
