import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Icon } from '@iconify/react';
import moment from "moment";

function PostSample({ meta, upvotes, comments, category, created_at }) {
  const [totalVotes, setTotalVotes] = useState(upvotes);

  function handleIncrementVote(event) {
    event.preventDefault();
    setTotalVotes(totalVotes + 1);
  }

  return (
    <div className={styles.postContainer}>
      <div className={styles.postVoteContainer}>
        <button className={styles.postVoteIncrement} onClick={(event) => handleIncrementVote(event)}>
          <Icon icon="ep:arrow-up-bold" />
        </button>
        <div className={styles.postVote}>
          <span>{totalVotes}</span>
        </div>
      </div>
      <div className={styles.postDataContainer}>
        <span className={styles.postUrl}>
          {meta.url.toUpperCase()}
        </span>
        <span className={styles.postTitle}>
          {meta.title}
        </span>
        <div className={styles.postDetails}>
          <span className={styles.postCategory}>
            {category}
          </span>
          <a href="/#" className={styles.postAuthor}>
            {meta.author}
          </a>
          <span className={styles.postDate}>
            {moment(created_at).fromNow()}
          </span>
          <a href="/" className={styles.postComments}>
          <Icon icon="fa:comment" />
            {comments} Comments
          </a>
        </div>
      </div>
    </div>
  );
}

export default PostSample;
