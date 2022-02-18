import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    filtered_list: [],
    authors_upvotes: {},
    loading: false,
  },
  reducers: {
    postsRequested: (posts, action) => {
      posts.loading = true;
    },

    postsReceived: (posts, action) => {
      posts.list = action.payload;
      posts.loading = false;
    },

    postsFiltered: (posts, action) => {
      posts.filtered_list = action.payload;
      posts.loading = false;
    },

    postsRequestFailed: (posts, action) => {
      posts.loading = false;
    },

    postsIncrementUpvotes: (posts, action) => {
      console.log("É isso que tá chegando aí: ", action.payload[1]);

      posts.authors_upvotes[action.payload[0]] = action.payload[1];
    },

    postsSetUpvotes: (posts, action) => {
      console.log("chegou o ", action.payload);

      var authorVotes = {};

      action.payload.forEach((item, index) => {
        let tempAuthorVotes = {
          [item.meta.author]: item.upvotes,
        };

        authorVotes = Object.assign(authorVotes, tempAuthorVotes);
      });

      console.log("Resultado final: ", authorVotes);

      posts.authors_upvotes = authorVotes;
    },
  },
});

export default slice.reducer;

const {
  postsRequested,
  postsReceived,
  postsFiltered,
  postsRequestFailed,
  postsIncrementUpvotes,
  postsSetUpvotes,
} = slice.actions;

export { postsReceived, postsFiltered, postsIncrementUpvotes, postsSetUpvotes };

const url = "/5a6bc16631000078341b8b77";

export const loadPosts = () => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url,
      onStart: postsRequested.type,
      onSuccess: postsReceived.type,
      onError: postsRequestFailed.type,
    })
  );
};
