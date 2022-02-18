import { useState, useRef, useEffect } from "react";

import styles from "./styles.module.scss";

function useOutsideCloser(ref, setIsOpen) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function MenuButton({ setCurrentFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  useOutsideCloser(menuRef, setIsOpen);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.buttonContainer} ref={menuRef}>
      <button className={styles.menuButton} onClick={handleMenu}>
        ☰
      </button>
      {isOpen && (
        <div className={styles.buttonOptions}>
          <ul className={styles.buttonList}>
            <li
              className={styles.buttonListItem}
              onClick={() => {
                setCurrentFilter("none");
                setIsOpen(false);
              }}
            >
              None
            </li>
            <li
              className={styles.buttonListItem}
              onClick={() => {
                setCurrentFilter("comments");
                setIsOpen(false);
              }}
            >
              Comments
            </li>
            <li
              className={styles.buttonListItem}
              onClick={() => {
                setCurrentFilter("created_at");
                setIsOpen(false);
              }}
            >
              Created at
            </li>
            <li
              className={styles.buttonListItem}
              onClick={() => {
                setCurrentFilter("upvotes");
                setIsOpen(false);
              }}
            >
              Popularity
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
