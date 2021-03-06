import React from "react";
import MainLayout from "../../layouts/MainLayout";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CommentIcon from "@material-ui/icons/Comment";
import styles from "./Posts.module.css";
import Fade from "@material-ui/core/Fade";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useRouter } from "next/dist/client/router";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import AddComment from "../../components/AddComment";
import CommentList from "../../components/CommentList";
import {
  editPost,
  removePost,
  setPost,
} from "../../store/reducers/postReducer";
import { wrapper } from "../../store";
import { END } from "redux-saga";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../utils/formatDate";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { TextField } from "@material-ui/core";
import { token } from "../../utils/token";
import jwt_decode from "jwt-decode";

const Post = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, post } = useSelector((state: any) => state.post);
  const postItem = post?.data?.post;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (loading) {
    return <p>Loading</p>;
  }
  const [activeLike, setActiveLike] = React.useState(false);
  const handleMunisLike = () => {
    console.log(postItem?.countLikes - 1);
    setActiveLike(false);
  };
  const handlePlusLike = () => {
    console.log(postItem?.countLikes + 1);
    setActiveLike(true);
  };
  const handleRemovePost = async () => {
    try {
      if (global.confirm("???? ?????????????????????????? ???????????? ?????????????? ?????????")) {
        await dispatch(removePost(router.query.id));
        router.push("/");
        setAnchorEl(null);
      }
      setAnchorEl(null);
    } catch (error) {}
  };
  const [postText, setPostText] = React.useState(postItem?.postText);
  const [isEdit, setIsEdit] = React.useState(false);
  const handleEditPost = async () => {
    try {
      const payload = { postId: router.query.id, postText };
      await dispatch(editPost(payload));
      setIsEdit(false);
      setAnchorEl(null);
    } catch (error) {}
  };
  const myId = token ? jwt_decode(token).id : null;
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
          <Avatar
            className={styles.postAvatar}
            sx={{ bgcolor: deepPurple[500] }}
          >
            U
          </Avatar>
          <div className={styles.head}>
            <Typography
              variant='h6'
              className={styles.postAuthor}
              gutterBottom
              component='div'
            >
              {postItem?.author}
            </Typography>
            <Typography
              variant='button'
              display='block'
              className={styles.postDate}
              gutterBottom
            >
              {/* {formatDate(new Date(postItem?.createdAt))} */}
              {postItem?.createdAt}
            </Typography>
          </div>
        </div>
        <div className={styles.postHeadParams}>
          {postItem?.userId == myId ? (
            <IconButton
              aria-label='settings'
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          ) : null}
        </div>
        <Menu
          id='fade-menu'
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleRemovePost}>
            <DeleteIcon /> ??????????????
          </MenuItem>
          {!isEdit ? (
            <MenuItem onClick={() => setIsEdit(true)}>
              <EditIcon /> ??????????????????????????
            </MenuItem>
          ) : (
            <Menu
              id='fade-menu'
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleEditPost}>
                <CheckIcon /> ???????????????? ????????
              </MenuItem>
              <MenuItem onClick={() => setIsEdit(false)}>
                <CloseIcon /> ????????????
              </MenuItem>
            </Menu>
          )}
        </Menu>
      </div>
      <div className={styles.postBody}>
        {!isEdit ? (
          <Typography
            variant='h6'
            className={styles.text}
            gutterBottom
            component='p'
          >
            {postItem?.postText}
          </Typography>
        ) : (
          <TextField
            value={postText}
            id='outlined-multiline-static'
            label='?????????????? ?????????????????????? ??????????'
            className={styles.text}
            rows={4}
            variant='outlined'
            onChange={(e) => setPostText(e.target.value)}
          />
        )}
        {postItem?.picturePost ? (
          <img
            className={styles.postImg}
            src={postItem?.picturePost}
            alt='img post'
          />
        ) : null}
      </div>
      <div className={styles.postFooter}>
        <div className={styles.postFooterRating}>
          <div className={styles.footerRating}>
            <IconButton
              aria-label='add to favorites'
              className={activeLike ? styles.activeLike : null}
              onClick={activeLike ? handleMunisLike : handlePlusLike}
            >
              <FavoriteIcon />
            </IconButton>
            <Typography
              variant='body2'
              color='text.secondary'
              className={
                activeLike ? styles.activeLike : styles.postFooterRatingCount
              }
            >
              {postItem?.countLikes}
            </Typography>
          </div>

          <div className={styles.footerRating}>
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
        </div>
        <div className={styles.postComments}>
          <Typography variant='h5'>??????????????????????:</Typography>
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
