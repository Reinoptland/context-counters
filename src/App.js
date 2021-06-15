import { useState, createContext } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Counters from "./pages/Counters";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

export const fruitCounterContext = createContext({});

function App() {
  const [apples, setApples] = useState(0);
  const [bananas, setBananas] = useState(0);
  const [pears, setPears] = useState(0);
  return (
    <fruitCounterContext.Provider
      value={{ apples, setApples, bananas, setBananas, pears, setPears }}
    >
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/counters">Bestellen</Link>
              </li>
              <li>
                <Link to="/checkout">Betalen</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/counters">
              <Counters />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home totalFruit={pears + apples + bananas} />
            </Route>
          </Switch>
        </header>
      </div>
    </fruitCounterContext.Provider>
  );
}

export default App;
