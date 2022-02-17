import { useState } from "react";

import moment from "moment";
import { Icon } from "@iconify/react";
import Badge from "../../Components/Badge";

import styles from "./styles.module.scss";

function PostSample({ meta, upvotes, comments, category, created_at }) {
  const [totalVotes, setTotalVotes] = useState(upvotes);

  console.log("Upvote: ", upvotes, "Total vote: ", totalVotes);

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
          <a href="/#" className={styles.postAuthor}>
            {meta.author}
          </a>
          <span className={styles.postDate}>
            {moment.unix(created_at).fromNow()}
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
