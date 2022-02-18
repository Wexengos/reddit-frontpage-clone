import { useState } from "react";

import moment from "moment";
import { Icon } from "@iconify/react";
import Badge from "./Badge";

import styles from "./styles.module.scss";

function PostSample({ meta, upvotes, comments, category, created_at }) {
  const [totalVotes, setTotalVotes] = useState(upvotes);

  function handleIncrementVote(event) {
    event.preventDefault();
    setTotalVotes(totalVotes + 1);
  }

  return (
    <div className={styles.postContainer}>
      <div className={styles.postVoteContainer}>
        <button
          className={styles.postVoteIncrement}
          onClick={(event) => handleIncrementVote(event)}
        >
          <Icon icon="ep:arrow-up-bold" />
        </button>
        <div className={styles.postVote}>
          <span>{totalVotes}</span>
        </div>
      </div>
      <div className={styles.postDataContainer}>
        <span className={styles.postUrl}>{meta.url.toUpperCase()}</span>
        <span className={styles.postTitle}>{meta.title}</span>
        <div className={styles.postDetails}>
          <Badge type={category} />
          <span className={styles.postDetailsSeparator}>|</span>
          <img
            alt=""
            className={styles.postAuthorImg}
            src="https://thispersondoesnotexist.com/image"
          />
          <a href="/#" className={styles.postAuthor}>
            {meta.author}
          </a>
          <span className={styles.postDate}>
            {moment.unix(created_at).fromNow()}
            <Icon icon="ci:dot-03-m" color="#9c9c9c"/>
          </span>



          <a href="/" className={styles.postComments}>
            <Icon icon="fa:comment" className={styles.postCommentsIcon} />
            {comments} Comments
          </a>
        </div>
      </div>
    </div>
  );
}

export default PostSample;
