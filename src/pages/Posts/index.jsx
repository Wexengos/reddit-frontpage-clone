import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../store/posts";

import Col from "react-bootstrap/Col";

import PostSample from "../../Components/PostSample";

function Pages() {
  const dispatch = useDispatch();

  const filtered_posts = useSelector((state) => state.filtered_list);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <Col className="LMcontainer">
      <div>
        {loading ? (
          <p>Loading posts...</p>
        ) : filtered_posts.length > 0 ? (
          filtered_posts.map((post, index) => {
            return (
              <PostSample
                key={index}
                post={post}
              />
            );
          })
        ) : (
          <p>Ops, no results found!</p>
        )}
      </div>
    </Col>
  );
}

export default Pages;
