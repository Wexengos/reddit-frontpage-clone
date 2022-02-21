import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { postsIncrementUpvotes } from "../../store/posts";

import moment from "moment";
import { Icon } from "@iconify/react";
import Badge from "./Badge";

import styles from "./styles.module.scss";

function PostSample({ post }) {
  const authors_upvotes = useSelector((state) => state.authors_upvotes);

  const dispatch = useDispatch();

  const [totalVotes, setTotalVotes] = useState(0);

  function handleIncrementVote(event) {
    console.log("Resultado no postSample: ", authors_upvotes);
    
    dispatch(postsIncrementUpvotes([post.meta.author, authors_upvotes[post.meta.author] + 1]))

  }

  return (
    <div className={styles.postContainer}>
      <div className={styles.postVoteContainer}>
        <button
          className={styles.postVoteIncrement}
          onClick={(event) => handleIncrementVote(event)}
        >
          ^
        </button>
        <div className={styles.postVote}>
          <span>{authors_upvotes[post.meta.author]}</span>
        </div>
      </div>
      <div className={styles.postDataContainer}>
        <span className={styles.postUrl}>{post.meta.url.toUpperCase()}</span>
        <span className={styles.postTitle}>{post.meta.title}</span>
        <div className={styles.postDetails}>
          <Badge type={post.category} />
          <span className={styles.postDetailsSeparator}>|</span>
          <img
            alt=""
            className={styles.postAuthorImg}
            src="https://thispersondoesnotexist.com/image"
          />
          <a href="/#" className={styles.postAuthor}>
            {post.meta.author}
          </a>
          <span className={styles.postDate}>
            {moment.unix(post.created_at).fromNow()}
            <Icon icon="ci:dot-03-m" color="#9c9c9c" />
          </span>

          <a href="/" className={styles.postComments}>
            <Icon icon="fa:comment" className={styles.postCommentsIcon} />
            {post.comments} Comments
          </a>
        </div>
      </div>
    </div>
  );
}

export default PostSample;
