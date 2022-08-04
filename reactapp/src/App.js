import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
} from "react-router-dom";

// Imports Hom,Friends, Posts pages.
import Home from "./Components/Home";
import Friends from "./Components/Friends";
import Posts from "./Components/Posts";

export default function App() {
  const posts = [
    {
      id: 1,
      title: "Hello World!",
      date: "05-15-2022",
      content: "Hello world!",
    },
    {
      id: 2,
      title: "Posting to my wall",
      date: "05-16-2022",
      content: "That's not how it works! That's not how any of this works!",
    },
    {
      id: 3,
      title: "Covfefe",
      date: "05-17-2022",
      content: "Despite the constant negative press covfefe",
    },
  ];

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link to Home page */}
          </li>
          <li>
            <Link to="/friends">Friends</Link> {/* Link to Friends page */}
          </li>
          <li>
            <Link to="/posts">Posts</Link> {/* Link to Posts page */}
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/friends" element={<Friends />} /> {/* Friends page */}
          <Route path="/posts" element={<Posts />} /> {/* Posts page */}
        </Routes>
      </div>
    </Router>
  );
}

/*
function Posts({ posts }) {
  // return <h2>Posts</h2>

  const match = useRouteMatch();
  const findPostById = (id) => posts.filter((post) => post.id == id)[0];

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <Link to={`${match.url}/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
      <Routes>
        <Route
          path={`${match.path}/:postId`}
          render={(props) => (
            <Post {...props} data={findPostById(props.match.params.postId)} />
          )}
        />
        <Route path={match.path}>
          <h3>Please Select a Post</h3>
        </Route>
      </Routes>
    </div>
  );
}

function Post(props) {
  const { data } = props;

  return (
    <div>
      <h3>{data.title}</h3>
      <h4>{data.date}</h4>
      <p>{data.content}</p>
    </div>
  );
}
*/
