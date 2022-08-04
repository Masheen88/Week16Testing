import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
} from "react-router-dom";

import Post from "./Post";

function Posts({ posts }) {
  // return <h2>Posts</h2>

  const match = useMatch();
  const findPostById = (id) => posts.filter((post) => post.id == id)[0];

  return (
    // route component
    <div>
      <h3>Please Select a Post</h3>
    </div>
  );
}

export default Posts;
