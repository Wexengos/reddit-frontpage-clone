import React, { useEffect, useState, useContext } from "react";

import Col from "react-bootstrap/Col";

import PostSample from "../../Components/PostSample";

import fakeRedditAPI from "../../services/fakeRedditApi";

import { FilterContext } from "../../App";

function Pages() {
  const [isLoading, setIsLoading] = useState(true);
  const { filters, setFilters } = useContext(FilterContext);

  console.log(filters);

  useEffect(() => {
    async function getPosts() {
      await fakeRedditAPI.listing.posts
        .pull()
        .then((res) => {
          setFilters(res.data.links);
          setIsLoading(false);
        })
        .catch({});
    }

    getPosts();
  }, [setFilters]);

  return (
    <Col className="container">
      <Col>
        {isLoading ? (
          <p>Loading posts...</p>
        ) : (
          filters.map((item, index) => {
            return <PostSample 
            key={index} 
            meta={item.meta} 
            upvotes={item.upvotes} 
            comments={item.comments} 
            created_at={item.created_at}
            category={item.category}
            />;
          })
        )}
      </Col>
    </Col>
  );
}

export default Pages;
