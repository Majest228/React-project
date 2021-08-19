import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (posts.length === 0) {
    return <h1>Посты не найдены</h1>;
  }
  return (
    <div>
      <h2>{title}</h2>
      {posts.map((post, index) => (
        <PostItem remove={remove} id={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
