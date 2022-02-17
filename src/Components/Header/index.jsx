import { useState, useContext } from "react";

import Select from "react-select";

import { FilterContext } from "../../App";

import MenuButton from "../../Components/MenuButton";

import styles from "./styles.module.scss";

function Header() {
  const { data, setFilteredData } = useContext(FilterContext);

  const [open, setOpen] = useState(false);
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
      return null;
    });

    setFilteredData(result);
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>

        <MenuButton
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
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
