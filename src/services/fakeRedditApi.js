import { api } from "./api";

const fakeRedditAPI = {
  listing: {
    posts: {
      pull: () => {
        return api.get(`/keycash/challenge`);
      },
    },
  },
};

export default fakeRedditAPI;
