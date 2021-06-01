import React from "react";
import MainLayout from "../../layouts/MainLayout";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CommentIcon from "@material-ui/icons/Comment";
import styles from "./Posts.module.css";
import { useRouter } from "next/dist/client/router";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import AddComment from "../../components/AddComment";
import CommentList from "../../components/CommentList";
import { setPost } from "../../store/reducers/postReducer";
import { wrapper } from "../../store";
import { END } from "redux-saga";
import { useSelector } from "react-redux";

const Post = () => {
  const router = useRouter();
  const { loading, post } = useSelector((state: any) => state.post);
  const postItem = post?.data?.post;
  React.useEffect((): any => {
    if (loading) {
      return <p>Loading</p>;
    }
  }, []);
  return (
    <MainLayout>
      <div className={styles.postHead}>
        <IconButton aria-label='back' onClick={() => router.push("/")}>
          <ArrowBackIcon />
        </IconButton>
        <div
          className={styles.postHeadUser}
          onClick={() => router.push(`/users/${postItem.userId}`)}
        >
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          <Typography variant='h6' gutterBottom component='div'>
            {postItem?.author}
          </Typography>
        </div>
        <div className={styles.postHeadParams}>
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.postBody}>
        {postItem?.picturePost ? (
          <img
            className={styles.postImg}
            src={postItem?.picturePost}
            alt='img post'
          />
        ) : null}

        <Typography variant='h6' gutterBottom component='p'>
          {postItem?.postText}
        </Typography>
      </div>
      <div className={styles.postFooter}>
        <div className={styles.postFooterDate}>
          <Typography variant='button' display='block' gutterBottom>
            {postItem?.createdAt}
          </Typography>
        </div>
        <div className={styles.postFooterRating}>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <Typography
            variant='body2'
            className={styles.postFooterRatingCount}
            color='text.secondary'
          >
            {postItem?.countLikes}
          </Typography>

          <IconButton aria-label='add to favorites'>
            <CommentIcon />
          </IconButton>
          <Typography
            variant='body2'
            className={styles.postFooterRatingCount}
            color='text.secondary'
          >
            {post?.data?.commentsPost?.length}
          </Typography>
        </div>
        <div className={styles.postComments}>
          {loading ? (
            <p>Loading Comments</p>
          ) : (
            <>
              <AddComment postId={router.query.id} />
              <CommentList
                comments={post?.data?.commentsPost}
                loading={loading}
              />
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    //@ts-ignore
    if (!store.getState().placeholderData) {
      //@ts-ignore
      store.dispatch(setPost(params.id));
      store.dispatch(END);
    }
    //@ts-ignore
    await store.sagaTask.toPromise();
  }
);
export default Post;
