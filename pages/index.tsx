import ImageListItem from "@material-ui/core/ImageListItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUsers } from "../store/reducers/userReducer";
import AddPost from "../components/AddPost";
import PostList from "../components/PostList";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";
import { wrapper } from "../store";
import { END } from "redux-saga";

//TODO:  3 Сделать Auth 5 Сделать получение и добавления постов

const Home = () => {
  const router = useRouter();

  //@ts-ignore
  const { token } = useSelector((state) => state.user);
  //@ts-ignore
  const state = useSelector((state) => state.user.users);
  console.log(state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setToken(localStorage.getItem("token")));
  }, [token]);
  // React.useEffect(() => {
  // if (!token) {
  //   router.push("/login");
  // } else {
  //   router.push("/");
  // }
  // });

  return (
    <MainLayout>
      <div className={styles.home__head}>
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
            Dark Side
          </Typography>
        </Paper>
      </div>
      <div>
        <AddPost />
        <PostList />
      </div>
    </MainLayout>
  );
};
// export const getStaticProps = async function () {
//   // Get the user's session based on the request
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  //@ts-ignore
  if (!store.getState().placeholderData) {
    store.dispatch(setUsers());
    store.dispatch(END);
  }
  //@ts-ignore
  await store.sagaTask.toPromise();
});
export default Home;
