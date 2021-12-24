import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import Newfeed from "./components/Newfeed";

function App() {
  return (
    <div className='app'>
      <Newfeed />
      <CurrencyConverter />
    </div>
  );
}

export default App;
