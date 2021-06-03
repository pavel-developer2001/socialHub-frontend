import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../store/reducers/userReducer";
import MainLayout from "../layouts/MainLayout";
import { wrapper } from "../store";
import { END } from "redux-saga";
import Login from "./login";
import { setPosts } from "../store/reducers/postReducer";
import PostList from "../components/PostList";
import AddPost from "../components/AddPost";

const Home = () => {
  const { token } = useSelector((state: any) => state.user);

  const { posts, loading } = useSelector((state: any) => state.post);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setToken(localStorage.getItem("token")));
  }, [token]);

  React.useEffect((): any => {
    if (!token) return <Login />;
  }, []);

  return (
    <MainLayout>
      лента
      <div>
        <AddPost />
      </div>
      <PostList loading={loading} posts={posts.data} />
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getStaticProps(async ({ store }) => {
  //@ts-ignore
  if (!store.getState().placeholderData) {
    store.dispatch(setPosts());
    store.dispatch(END);
  }
  //@ts-ignore
  await store.sagaTask.toPromise();
});
export default Home;
