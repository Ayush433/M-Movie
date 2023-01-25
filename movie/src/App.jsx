import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState([]);

  return (
    <div className="App">
      {/* <Dashboard /> */}
      <Home />
    </div>
  );
}

export default App;
