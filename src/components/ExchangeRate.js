import React from "react";

function ExchangeRate({
  ExchangeRate,
  chosenPrimaryCurrency,
  chosenSecondaryCurrency,
}) {
  return (
    <div className='exchange-rate'>
      <h3>The Exchange rate:</h3>
      <h1> {ExchangeRate}</h1>
      <p>
        {chosenPrimaryCurrency} To {chosenSecondaryCurrency}
      </p>
    </div>
  );
}

export default ExchangeRate;
