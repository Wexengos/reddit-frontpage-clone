import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";

import Header from "./Components/Header";

import "./styles/global.scss";

export const FilterContext = React.createContext({
  data: [],
  setData: () => {},
  filteredData: [],
  setFilteredData: () => {},
});

const store = configureStore();

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const searchFilter = { data, setData, filteredData, setFilteredData };

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
