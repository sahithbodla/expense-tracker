import React from 'react'

const IndianNumberingSystem = ({amount}) => {

  let seperateDecimals = amount.split(".")

  let amountArray = String(seperateDecimals[0]).split("");
  let otherArray = [];

  let thousands = 3;

  while(amountArray.length && thousands > 0){
    otherArray.push(amountArray.pop());
    thousands--;
  }

  while(amountArray.length){
      otherArray.push(",");
      otherArray.push(amountArray.pop());
      if(amountArray.length){
        otherArray.push(amountArray.pop());
      }
  }

  let finalResult = otherArray.reverse().join("").concat(".",seperateDecimals[1]);

  return (
    <>{finalResult}</>
  )
}

export default IndianNumberingSystem