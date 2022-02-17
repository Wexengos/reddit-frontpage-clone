import React, { useContext } from "react";

import styles from "./styles.module.scss";

import { FilterContext } from "../../App";

function handleSearch(filters, setFilters, event) {
  // setIsSearched(true);
  let value = event.target.value.toLowerCase();
  let result = [];

  console.log("value: ", value);

  result = filters.filter((data) => {
    let exists =
      data.meta.title.toString().toLowerCase().search(value) !== -1;
    return exists;
  });

  setFilters(result);
}

function Header() {
  const { filters, setFilters } = useContext(FilterContext);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <input
          type="text"
          className={styles.searchInput}
          onChange={(e) => handleSearch(filters, setFilters, e)}
        />
      </div>
    </div>
  );
}

export default Header;
