import { GET_POSTS } from "../action/postsAction";

export const getPosts = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => dispatch({ type: GET_POSTS, payload: res.slice(0, 30) }))
      .catch((err) => console.log("get posts", err));
  };
};
