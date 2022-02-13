import React,{useContext} from 'react';
import {GlobalContext} from "../Context/GlobalState"

const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const balance = amounts.reduce((acc,val) => acc+=val,0);

  return (
    <>
        <h4>Your Balance</h4>
        <h1>${balance}</h1>
    </>
  )
}

export default Balance