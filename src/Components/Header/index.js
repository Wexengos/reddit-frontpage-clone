import React, { useState, useContext } from "react";

import Select from "react-select";

import styles from "./styles.module.scss";

import { FilterContext } from "../../App";
import { options } from "./filterOptions";

function Header() {
  const { data, setFilteredData } = useContext(FilterContext);

  const [currentFilter, setCurrentFilter] = useState();

  function handleSearch(data, setFilteredData, event) {
    // setIsSearched(true);
    let value = event.target.value.toLowerCase();
    let result = [];

    console.log("value: ", value);
    console.log("data: ", data);

    result = data.filter((target) => {
      if (target[currentFilter] !== null) {
        let exists =
          target[currentFilter].toString().toLowerCase().search(value) !== -1;
        return exists;
      }
    });

    setFilteredData(result);
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Select
          options={options}
          onChange={(selectedOption) => {
            console.log("filtro: ", currentFilter);
            setCurrentFilter(selectedOption.value);
          }}
        />
        <input
          type="text"
          className={styles.searchInput}
          onChange={(e) => handleSearch(data, setFilteredData, e)}
        />
      </div>
    </div>
  );
}

export default Header;
