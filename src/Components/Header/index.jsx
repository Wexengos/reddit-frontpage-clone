import { Icon } from "@iconify/react";
import { useState, useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postsFiltered } from "../../store/posts";

import { FilterContext } from "../../App";

import MenuButton from "../../Components/Header/MenuButton";

import Logo from "../../assets/logo.png";

import styles from "./styles.module.scss";

function Header() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.list);
  const filtered_posts = useSelector((state) => state.filtered_list);

  const { data, setFilteredData } = useContext(FilterContext);

  const [currentFilter, setCurrentFilter] = useState("none");

  function handleSearch(event) {
    // setIsSearched(true);
    let value = event.target.value.toLowerCase();
    let result = [];

    // console.log("value: ", value);
    // console.log("filtro: ", currentFilter);

    result = posts.filter((target) => {
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

    dispatch(postsFiltered(result));
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={Logo} alt="logo" className={styles.headerLogo} />
        <MenuButton
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
        <div className={styles.headerInputContainer}>
          <Icon
            icon="fluent:search-16-filled"
            className={styles.headerInputIcon}
          />

          <input
            type="text"
            className={styles.searchInput}
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
