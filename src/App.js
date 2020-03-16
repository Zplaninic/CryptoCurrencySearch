import React from "react";
import ReactDOM from "react-dom";
import Currency from './Currency'
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <h1>Which coin you want to look</h1>
      {/* <Currency symbol="BTC" name="BITCOIN" nameid="bitcoin" price_usd='6456.52' /> */}
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));