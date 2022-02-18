import React, {useState,useContext} from 'react';
import {GlobalContext} from "../Context/GlobalState"

const AddTransaction = () => {

    const [text,setText]=useState("");
    const [amount,setAmount]=useState("");

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const dateNow = new Date();
        const correctedMonth = dateNow.getMonth()>9 ? dateNow.getMonth()+1 : '0' + (dateNow.getMonth() + 1);
        const correctedDate = dateNow.getDate()>9 ? dateNow.getDate() : "0" + dateNow.getDate();

        const date = `${dateNow.getFullYear()}-${correctedMonth}-${correctedDate}`;

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount,
            date
        }

        addTransaction(newTransaction);
        setText("");
        setAmount("");
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">
                        Text
                    </label>
                    <input 
                    type="text" 
                    placeholder="Enter text ..."
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input 
                    type="number" 
                    placeholder="Enter amount ..." 
                    value={amount} 
                    onChange={(e) => setAmount(+e.target.value)}
                    />
                </div>
                <button className="btn">
                    Add transaction
                </button>
            </form>
        </div>
    )
}

export default AddTransaction