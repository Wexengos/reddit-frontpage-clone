import { useEffect, useState, useContext } from "react";

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
  }, [setData, setFilteredData]);

  return (
    <Col className="LMcontainer">
      <div>
        {isLoading ? (
          <p>Loading posts...</p>
        ) : filteredData.length > 0 ? (
          filteredData.map((item, index) => {
            console.log("Item está como tamanho ", filteredData.length);
            return (
              <PostSample
                key={index}
                meta={item.meta}
                upvotes={item.upvotes}
                comments={item.comments}
                category={item.category}
                created_at={item.created_at}
              />
            );

            //meta, upvotes, comments, category, created_at
          })
        ) : (
          <p>Ops! No results found.</p>
        )}
      </div>
    </Col>
  );
}

export default Pages;
