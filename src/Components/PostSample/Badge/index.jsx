import styles from "./styles.module.scss";

function humanizeString(str) {
  var frags = str.split("_");
  for (let i = 0; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(" ");
}

function Badge({ type }) {
  return (
    <span className={styles[type]}>
      {type === "ux_ui" ? "UX UI" : humanizeString(type)}
    </span>
  );
}

export default Badge;
