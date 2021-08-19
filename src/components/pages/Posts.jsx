import React, { useState, useMemo, useEffect } from "react";
import "../../styles/App.css";
import { usePosts } from "../huks/usePosts";
import { useFetching } from "../huks/useFetching";
import PostService from "../Api/PostService";
import { getPageCount, getPagesArray } from "../../utils/pages";
import MyButton from "../UI/Button/MyButton";
import MyModal from "../UI/Modal/MyModal";
import PostForm from "../PostForm";
import PostFilter from "../PostFilter";
import Loader from "../UI/Loader/Loader";
import PostList from "../PostList";

const Posts = () => {
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      body: "JavaScript is a scripting language",
    },
    {
      id: 2,
      title: "Python",
      body: "Python is a scripting language 2",
    },
    {
      id: 3,
      title: "Angular",
      body: "Angular is a scripting language 3",
    },
  ]);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  let pagesArray = getPagesArray(totalPages);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const changePages = (page) => setPage(page);
  return (
    <div className="posts">
      <div className="container">
        <MyButton onClick={() => setModal(true)}>Создать запись</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>
        <PostFilter filter={filter} setFilter={setFilter} />
        {isPostsLoading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loader />
          </div>
        ) : (
          <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title="List №1"
          />
        )}
        <div className="pages">
          {pagesArray.map((p) => {
            return (
              <span
                onClick={() => changePages(p)}
                key={p}
                className={
                  page === p ? "page__button page__current" : "page__button"
                }
              >
                {p}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
