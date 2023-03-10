import { createStore, applyMiddleware } from "redux";
import postsReducer from "./reducer/postsReducer";
import thunk from "redux-thunk";

const store = createStore(postsReducer, applyMiddleware(thunk));
export default store;
