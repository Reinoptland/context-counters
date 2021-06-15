import React, { useContext } from "react";
import { fruitCounterContext } from "../App";

export default function Checkout() {
  const { apples, bananas, pears } = useContext(fruitCounterContext);
  return (
    <div>
      <div>
        <h3>🍎: {apples}</h3>
      </div>
      <div>
        <h3>🍌: {bananas}</h3>
      </div>
      <div>
        <h3>🍐: {pears}</h3>
      </div>
      <button>Checkout!</button>
    </div>
  );
}
