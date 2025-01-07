import React, { useEffect, useState } from 'react'
import { use } from 'react';

const TransactionCell =(props)=>{
    const isExpense = props.payload?.type === "EXPENSE";

    return(
        <div className='w-[20%] flex items-center justify-center border m-auto mt-4'>
            <div 
        className={` w-full flex-start flex items-center justify-between gap-4  border-r-4 px-2 ${
            isExpense ? "border-red-500" : "border-green-500"
          }`}
          >
            <div className='flex flex-col justify-start '>
            <span className='flex flex-start' >{props.payload.title}</span>
            <span>{props.payload.date}</span>
            </div>
            <div>
            <span className=''>${props.payload.amount}</span>
            </div>
           
        </div>
        </div>
    )
}


const Transaction = (props) => {
    const[searchText, updateSearchtext] = useState("");
    const [filteredTransaction, updateTxn] = useState(props.expenses);
    const filterData = ()=>{
        if(!searchText || !searchText.trim().length){
            updateTxn(props.expenses);
            return;
        }
        let txn = [...props.expenses];
        txn=txn.filter((payload)=> payload.title.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updateTxn(txn);
    }

    useEffect(()=> filterData(searchText),[props.expenses])
  return (
    <div className='m-4 w-60%'>
      <h3 className='font-bold text-[24px] mb-4 '> Expenses</h3>  

      <input 
       type="text"
       placeholder='Search'
       className='border w-[60%] p-1' 
       value={searchText}
       onChange={(e)=> {updateSearchtext(e.target.value)
        filterData(e.target.value)}
       }
       
       />
      {filteredTransaction?.length ? filteredTransaction.map((payload)=>(
        <TransactionCell payload={payload}/>

        
      )): ""}
    </div>
  )
}

export default Transaction
