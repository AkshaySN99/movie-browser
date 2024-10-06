import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if(searchText) {
      fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=3f26a3875d6858c59103ca2c6617d08e&query=${searchText}&include_adult=false&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSearchResults(data.results);
      });
    }
  }, [searchText]);

  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element={<MovieView/>} />
      </Routes>
    </div>
  );
}

export default App;
