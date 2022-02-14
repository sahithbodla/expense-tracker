import React from 'react';
import {GlobalContext} from "../Context/GlobalState"

const IncomeExpenses = () => {
  const {transactions} = React.useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
  .filter(item => item > 0)
  .reduce((acc,val) => acc+=val, 0)
  .toFixed(2);

  const expense = amounts
  .filter(item => item < 0)
  .reduce((acc,val) => acc+=val, 0)
  .toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">&#8377; {income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">&#8377; {Math.abs(expense).toFixed(2)}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses