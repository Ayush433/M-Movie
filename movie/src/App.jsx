import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router";

import MovieByCategory from "./Pages/MovieByCategory";
import Search from "./Pages/Search";
import Detail from "./Pages/Detail";
import PageQuery from "./Pages/PageQuery";

function App() {
  const [count, setCount] = useState([]);

  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Dashboard /> */}
      <Home />
=======
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages/:category" element={<MovieByCategory />} />
        <Route path="search/movie/:searchText" element={<Search />} />
        <Route path="/movie/:page" element={<PageQuery />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
>>>>>>> movie-toolkit
    </div>
  );
}

export default App;
