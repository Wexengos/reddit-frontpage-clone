import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";

export default function AddPost() {
  return (
    <button className={styles.addPostButtton}>
      <div className={styles.addPostPlusIcon}>
        <Icon icon="fa-solid:plus" className={styles.plusIcon} />
      </div>
      <div className={styles.addPostText}>Add Post</div>
    </button>
  );
}
