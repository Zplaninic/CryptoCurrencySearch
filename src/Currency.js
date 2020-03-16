import React from "react";

const Currency = props => {
  const {symbol, name, nameid, price_usd} = props.exactCurrency;
  return(
    <div>
      <div>{symbol}</div>
      <div>{name}</div>
      <div>{nameid}</div>
      <div>{price_usd}</div>  
    </div>
  ) 
}

export default Currency;