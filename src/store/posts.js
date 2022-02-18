import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    filtered_list: [],
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

    postsIncrementUpvote: (posts, action) => {
      console.log("action: ", action);

      let indexAux = posts.list.findIndex(
        (element) =>
          element.meta.author ===
          posts.filtered_list[action.payload[1]].meta.author
      );

      console.log("index aux: ", indexAux);
      posts.filtered_list[action.payload[1]].upvotes = posts.list[
        indexAux
      ].upvotes = action.payload[0];

      // console.log(
      //   posts.list[action.payload[1]].upvotes,
      //   " ",
      //   posts.filtered_list[action.payload[1]].upvotes
      // );
    },
  },
});

export default slice.reducer;

const {
  postsRequested,
  postsReceived,
  postsFiltered,
  postsRequestFailed,
  postsIncrementUpvote,
} = slice.actions;

export { postsReceived, postsFiltered, postsIncrementUpvote };

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
