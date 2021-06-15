import React, { useContext } from "react";
import { fruitCounterContext } from "../App";

export default function Home() {
  const { apples, bananas, pears } = useContext(fruitCounterContext);
  return <div>{apples + bananas + pears} stuks fruit besteld </div>;
}
