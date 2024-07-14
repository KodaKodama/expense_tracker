import React, { useState } from 'react'
import './ExpressTracker.css'
function ExpressTracker() {
    const [input, setInput] = useState('');
    const [amount, setAmount] = useState('');
    const [expense, setExpense] = useState([]);
    const addExpense = () => {
        if(!input || !amount){
            return;
        }
        const newExpense = {
            id: expense.length +1,
            title: input,
            amount: amount
        }
        setExpense([...expense, newExpense]);
        setInput('');
        setAmount('');
    }
    const deleteExpense = (exId) => {
        setExpense(expense.filter((expense) => expense.id !== exId))
    }
  return (
    <div>
        <h2>Express Tracker</h2>
        <div>
            <input type='text'
            placeholder='Expense'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <input type='number'
            placeholder='Amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={addExpense}>Add Expense</button>
        </div>
        <ul className='expense-list'>
            {
                expense.map((ex) => {
                    return <li key={ex.id}>
                        <span>{ex.title}</span>
                        <span>{ex.amount}</span>
                        <button onClick={()=> deleteExpense(ex.id)}>Delete</button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default ExpressTracker