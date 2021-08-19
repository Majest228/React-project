import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "./huks/useFetching";
import PostService from "./Api/PostService";
import Loader from "./UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });
  const [fetchCommentById, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentById(params.id);
  }, []);
  return (
    <div>
      <h1>Вы загрузили данную страницу - {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}.{post.title}
        </div>
      )}
      <h1>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        comments.map((comment) => {
          return (
            <div>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default PostIdPage;
