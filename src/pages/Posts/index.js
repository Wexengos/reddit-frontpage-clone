import React, { useEffect, useState, useContext } from "react";

import Col from "react-bootstrap/Col";

import PostSample from "../../Components/PostSample";

import fakeRedditAPI from "../../services/fakeRedditApi";

import { FilterContext } from "../../App";

function Pages() {
  const [isLoading, setIsLoading] = useState(true);
  const { data, setData, filteredData, setFilteredData } =
    useContext(FilterContext);

  console.log(data);

  useEffect(() => {
    async function getPosts() {
      await fakeRedditAPI.listing.posts
        .pull()
        .then((res) => {
          setData(res.data.links);
          setFilteredData(res.data.links);
          setIsLoading(false);
        })
        .catch({});
    }

    getPosts();
  }, [setData]);

  return (
    <Col className="container">
      <Col>
        {isLoading ? (
          <p>Loading posts...</p>
        ) : (
          filteredData.map((item, index) => {
            return (
              <PostSample
                key={index}
                title={item.meta.title}
                url={item.meta.url}
              />
            );
          })
        )}
      </Col>
    </Col>
  );
}

export default Pages;
