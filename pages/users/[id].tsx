import React from "react";
import MainLayout from "../../layouts/MainLayout";
import AddPost from "../../components/AddPost";
import PostList from "../../components/PostList";
import ImageListItem from "@material-ui/core/ImageListItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./Users.module.css";
import { wrapper } from "../../store";
import { END } from "redux-saga";
import { setUser } from "../../store/reducers/userReducer";
import { useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";

const Users = () => {
  const { user } = useSelector((state: any) => state.user);
  const { loading } = useSelector((state: any) => state.user);
  const data = user.data.user;
  return (
    <MainLayout>
      <>
        <div className={styles.home__head}>
          {loading ? (
            <p>loading</p>
          ) : (
            <>
              <ImageListItem>
                <img
                  className={styles.home__img}
                  srcSet='https://www.woddal.com/upload/photos/2020/02/WQu5hFcRetKegzqsbseJ_06_46054a9f52409eb9fe6f321ab0f074ee_avatar_full.jpeg'
                  alt='init person avatar'
                  loading='lazy'
                />
              </ImageListItem>
              <Paper elevation={2} className={styles.home__headContent}>
                <Typography variant='h5' gutterBottom component='div'>
                  {data.name}
                </Typography>
              </Paper>{" "}
            </>
          )}
        </div>
        <div>
          <AddPost />
          <PostList loading={loading} posts={user.data.postsUser} />
        </div>
      </>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    //@ts-ignore
    if (!store.getState().placeholderData) {
      //@ts-ignore
      store.dispatch(setUser(params.id));
      store.dispatch(END);
    }
    //@ts-ignore
    await store.sagaTask.toPromise();
  }
);
export default Users;
