import React from 'react';
import {GlobalContext} from '../Context/GlobalState';
import IndianNumberingSystem from './IndianNumberingSystem';

const Transaction = ({transaction}) => {
    const {deleteTransaction} = React.useContext(GlobalContext);
    const sign = transaction.amount<0?'-':'+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <div className="date">
                <div style={{fontSize: '20px'}}>
                    {transaction.text}
                </div>
                <div style={{fontSize: '10px', color: "#401bf8"}}>
                    {transaction.date}
                </div>                
            </div>
            <span>
                {sign} &#8377; <IndianNumberingSystem amount={Math.abs(transaction.amount).toFixed(2)}/>
            </span> 
            <button 
            className="delete-btn"
            onClick={() => deleteTransaction(transaction.id)}
            >
                x
            </button>
        </li>
    )
}

export default Transaction