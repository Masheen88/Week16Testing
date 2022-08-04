import React from "react";

// post component

class Post extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default Post;
