import { GET_POSTS } from "../action/postsAction";

const initialState = {
  posts: null,
};

export default function postsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_POSTS:
      return {
        ...initialState,
        posts: payload,
      };
    default:
      return state;
  }
}
