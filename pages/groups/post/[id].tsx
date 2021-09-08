import { Avatar, Fade, Menu, MenuItem, Typography } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
import { useRouter } from "next/dist/client/router";
import React from "react";
import MainLayout from "../../../layouts/MainLayout";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CommentIcon from "@material-ui/icons/Comment";
import styles from "./Post.module.css";
import AddGroupComment from "../../../components/AddGroupComment";
import GroupCommentList from "../../../components/GroupCommentList";
import { wrapper } from "../../../store";
import { setGroupPost } from "../../../store/reducers/groupPostReducer";
import { END } from "redux-saga";
import { useSelector } from "react-redux";

const GroupPost = () => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const groupPost = useSelector<any>((state) => state.groupPost.groupPost.data);
  const loading = useSelector<any>((state) => state.groupPost.loading);
  return (
    <MainLayout>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <div className={styles.postHead}>
            <IconButton
              aria-label='back'
              onClick={() => router.push("/groups/" + groupPost?.groupId)}
            >
              <ArrowBackIcon />
            </IconButton>
            <div
              className={styles.postHeadUser}
              onClick={() => router.push(`/groups/` + groupPost?.groupId)}
            >
              {groupPost?.groupPostPicture ? (
                groupPost?.groupPostPicture
              ) : (
                <Avatar sx={{ bgcolor: deepPurple[500] }}>G</Avatar>
              )}
              <Typography variant='h6' gutterBottom component='div'>
                {groupPost?.groupPostAuthor}
              </Typography>
            </div>
            <div className={styles.postHeadParams}>
              <IconButton
                aria-label='settings'
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
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
              <MenuItem onClick={handleClose}>
                <DeleteIcon /> Удалить
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <EditIcon /> Редактировать
              </MenuItem>
            </Menu>
          </div>
          <div className={styles.postBody}>
            {groupPost?.groupPostPicture ? groupPost?.groupPostPicture : null}
            <Typography variant='h6' gutterBottom component='p'>
              {groupPost?.groupPostText}
            </Typography>
          </div>
          <div className={styles.postFooter}>
            <div className={styles.postFooterDate}>
              <Typography variant='button' display='block' gutterBottom>
                {groupPost?.createdAt}
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
                {groupPost?.groupPostCountLikes}
              </Typography>

              <IconButton aria-label='add to favorites'>
                <CommentIcon />
              </IconButton>
              <Typography
                variant='body2'
                className={styles.postFooterRatingCount}
                color='text.secondary'
              >
                999
              </Typography>
            </div>
            <div className={styles.postComments}>
              <>
                <AddGroupComment />
                <GroupCommentList />
              </>
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    //@ts-ignore
    if (!store.getState().placeholderData) {
      store.dispatch(setGroupPost(params?.id));
      store.dispatch(END);
    }
    //@ts-ignore
    await store.sagaTask.toPromise();
  }
);

export default GroupPost;
