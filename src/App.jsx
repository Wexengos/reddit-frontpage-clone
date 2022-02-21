import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import { createContext, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";

import Header from "./components/Header";

import "./styles/global.scss";
import Footer from "./components/Footer";

export const FilterContext = createContext({
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
          <Header />
          <Routes>
            <Route element={<Posts />} path="/" />
          </Routes>
            <Footer />

        </BrowserRouter>
      </FilterContext.Provider>
    </Provider>
  );
}

export default App;
