import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

function CurrencyConverter() {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [PrimaryCurrency, setPrimaryCurrency] = useState("BTC");
  const [SecondaryCurrency, setSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);

  const convert = () => {
    var options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: PrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: SecondaryCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": "50dfe8bbe6msha025a531747029dp119647jsn255a560e8e36",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"],
          setExchangeRate(
            response.data["Realtime Currency Exchange Rate"][
              "5. Exchange Rate"
            ],
          ),
          setResult(
            response.data["Realtime Currency Exchange Rate"][
              "5. Exchange Rate"
            ] * amount,
          ),
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(exchangeRate);

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
                <input type='Number' name='currency' value={result} />
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
        <button id='convert-btn' onClick={convert}>
          {" "}
          click here
        </button>
      </div>
      <ExchangeRate
        ExchangeRate={exchangeRate}
        chosenPrimaryCurrency={PrimaryCurrency}
        chosenSecondaryCurrency={SecondaryCurrency}
      />
    </div>
  );
}

export default CurrencyConverter;
