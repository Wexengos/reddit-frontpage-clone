import { useState, useContext } from "react";

import Select from "react-select";

import styles from "./styles.module.scss";

import { FilterContext } from "../../App";
import { options } from "./filterOptions";

function Header() {
  const { data, setFilteredData } = useContext(FilterContext);

  const [currentFilter, setCurrentFilter] = useState("none");

  function handleSearch(data, setFilteredData, event) {
    // setIsSearched(true);
    let value = event.target.value.toLowerCase();
    let result = [];

    console.log("value: ", value);
    console.log("filtro: ", currentFilter);

    result = data.filter((target) => {
      if (currentFilter === "none") {
        let exists = JSON.stringify(target).toLowerCase().search(value) !== -1;
        return exists;
      }
      if (target[currentFilter] !== undefined) {
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
          defaultValue={options[0]}
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
