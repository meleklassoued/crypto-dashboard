import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";

function CurrencyConverter() {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [PrimaryCurrency, setPrimaryCurrency] = useState("BTC");
  const [SecondaryCurrency, setSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  

  

  return (
    <div className='currency-converter'>
      <div className='input-box'>
        <h2> Im CurrencyConverter</h2>
        <table>
          <body>
            <tr>
              <td>primary Currency</td>
              <td>
                <input
                  type='Number'
                  name='currency'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={PrimaryCurrency}
                  name='currency-option-1'
                  className='currency-options'
                  onChange={(e) => setPrimaryCurrency(e.target.value)}>
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>secondary currency</td>
              <td>
                <input type='Number' />
              </td>
              <td>
                <select
                  value={SecondaryCurrency}
                  name='currency-otion-2'
                  className='currency-options'
                  onChange={(e) => setSecondaryCurrency(e.target.value)}>
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </body>
        </table>
        <button id='convert-btn' onClick={convert}></button>
      </div>
      <ExchangeRate />
    </div>
  );
}

export default CurrencyConverter;
