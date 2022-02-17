import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";

import Header from "./Components/Header"

import "./styles/global.scss";

export const FilterContext = React.createContext({
  filters: [],
  setFilters: () => {},
});

function App() {
  const [filters, setFilters] = useState("papagaio");
  const searchFilter = { filters, setFilters };

  return (
    <FilterContext.Provider value={searchFilter}>
      <BrowserRouter>
      <React.Fragment>
        <Header />
      </React.Fragment>
        <Routes>
          <Route element={<Posts />} path="/" />
        </Routes>
      </BrowserRouter>
    </FilterContext.Provider>
  );
}

export default App;
