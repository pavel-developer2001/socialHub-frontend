import ImageListItem from "@material-ui/core/ImageListItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import AddPost from "../components/AddPost";
import PostList from "../components/PostList";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";

const Home = () => {
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
// export const getServerSideProps = async function () {
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
export default Home;
