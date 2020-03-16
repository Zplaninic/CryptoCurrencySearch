import React, { useState } from "react";
import useFetch from "./useFetch";
import Currency from "./Currency";

const SearchParams = () => {
  const startNumber = 0;
  const limitNumber = 10;
  const urlApi = `https://api.coinlore.net/api/tickers/?start=${startNumber}&limit=${limitNumber}`;
  const data = useFetch(urlApi);

  const [cryptoCurency, updateCryptoCurency] = useState("bitcoin");
  const [exactCurrency, setExactCurrency] = useState([]);

  async function requestCurrency() {
    const exactCurrency = await data.find(el => {
      if (el.nameid === cryptoCurency) {
        return el;
      }
    });

    setExactCurrency(exactCurrency);
  }

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          requestCurrency();
        }}
      >
        <label htmlFor="cryptoSearcher">
          CryptoSearcher
          <select
            id="cryptoSearcher"
            value={cryptoCurency}
            placeholder="Pick your cryptocurrency"
            onChange={e => updateCryptoCurency(e.target.value)}
            onBlur={e => updateCryptoCurency(e.target.value)}
          >
            {data.length !== 0 &&
              data.map(el => (
                <option key={el.id} value={el.nameid}>
                  {el.nameid}
                </option>
              ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Currency exactCurrency={exactCurrency} />
    </div>
  );
};

export default SearchParams;
