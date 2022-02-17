import React from "react";

import styles from "./styles.module.scss";

function PostSample({ category, comments, created_at, author, title, url }) {
  return (
    <div className={styles.postContainer}>
      <p className={styles.postUrl}>{url.toUpperCase()}</p>
      <p className={styles.postTitle}>{title}</p>
    </div>
  );
}

export default PostSample;
