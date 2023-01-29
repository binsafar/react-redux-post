import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./store/api/postsApi";
import { useState } from "react";
import useKeyPress from "./hooks/UseKeyPress";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [active, setActive] = useState(1);

  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    if (arrowDownPressed) setActive(active < 30 ? active + 1 : 1);
  }, [arrowDownPressed]);

  useEffect(() => {
    if (arrowUpPressed) setActive(active > 1 ? active - 1 : 30);
  }, [arrowUpPressed]);

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts == null && <h1>Loading...</h1>}
        {posts &&
          posts.map((element) => {
            return (
              <li
                key={element.id}
                className={`${active === element.id ? "active" : ""}`}
                onClick={() => setActive(element.id)}
              >
                <b>{element.title}</b>
                <br /> {element.body}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default App;
