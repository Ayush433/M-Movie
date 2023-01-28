import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router";

import MovieByCategory from "./Pages/MovieByCategory";
import Search from "./Pages/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages/:category" element={<MovieByCategory />} />
        <Route path="search/movie/:searchText" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
