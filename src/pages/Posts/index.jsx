import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../store/posts";

import Col from "react-bootstrap/Col";

import PostSample from "../../components/PostSample";
import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";

function Pages() {
  const dispatch = useDispatch();

  const filtered_posts = useSelector((state) => state.filtered_list);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <Col className={styles.postContainer}>
      <div>
        {loading ? (
          <p>Loading posts...</p>
        ) : filtered_posts.length > 0 ? (
          filtered_posts.map((post, index) => {
            return <PostSample key={index} post={post} />;
          })
        ) : (
          <p>Ops, no results found!</p>
        )}
        <div className={styles.postsListLoadMore}>
          <div className={styles.postsListLoadMoreIcon}>
          <Icon icon="ph:arrows-clockwise-bold" />
          </div>
          <span>Load more</span>
        </div>
      </div>
    </Col>
  );
}

export default Pages;
