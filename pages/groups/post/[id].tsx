import {
  Avatar,
  Fade,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
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
import {
  editGroupPost,
  removeGroupPost,
  setGroupPost,
} from "../../../store/reducers/groupPostReducer";
import { END } from "redux-saga";
import { useDispatch, useSelector } from "react-redux";
import { setGroupComments } from "../../../store/reducers/groupCommentReducer";
import { formatDate } from "../../../utils/formatDate";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

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

  const groupComments = useSelector<any>(
    (state) => state.groupComment.groupComments.data
  );
  const loadingComments = useSelector<any>(
    (state) => state.groupComment.loading
  );
  const groupPostId = router.query.id;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setGroupComments(groupPostId));
  }, []);

  const handleRemoveGroupPost = async () => {
    try {
      if (global.confirm("???? ?????????????????????????? ???????????? ?????????????? ???????? ?????????????????????")) {
        await dispatch(removeGroupPost(groupPostId));
        router.push("/groups/" + groupPost?.groupId);
        setAnchorEl(null);
      }
      setAnchorEl(null);
    } catch (error) {}
  };
  const [groupPostText, setGroupPostText] = React.useState(
    groupPost?.groupPostText
  );
  const [isEdit, setIsEdit] = React.useState(false);
  const handleEditGroupPost = async () => {
    try {
      const payload = { groupPostId, groupPostText };
      await dispatch(editGroupPost(payload));
      setIsEdit(false);
      setAnchorEl(null);
    } catch (error) {}
  };
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
                <Avatar
                  className={styles.postAvatar}
                  sx={{ bgcolor: deepPurple[500] }}
                >
                  G
                </Avatar>
              )}
              <div className={styles.head}>
                <Typography
                  variant='h6'
                  className={styles.postAuthor}
                  gutterBottom
                  component='div'
                >
                  {groupPost?.groupPostAuthor}
                </Typography>
                <Typography
                  variant='button'
                  className={styles.postDate}
                  display='block'
                  gutterBottom
                >
                  {/* {formatDate(new Date(groupPost?.createdAt))} */}
                  {groupPost?.createdAt}
                </Typography>
              </div>
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
              <MenuItem onClick={handleRemoveGroupPost}>
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
                  <MenuItem onClick={handleEditGroupPost}>
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
            {groupPost?.groupPostPicture ? groupPost?.groupPostPicture : null}

            {!isEdit ? (
              <Typography
                variant='h6'
                className={styles.text}
                gutterBottom
                component='p'
              >
                {groupPost?.groupPostText}
              </Typography>
            ) : (
              <TextField
                value={groupPostText}
                id='outlined-multiline-static'
                label='?????????????? ?????????????????????? ??????????'
                className={styles.text}
                rows={4}
                variant='outlined'
                onChange={(e) => setGroupPostText(e.target.value)}
              />
            )}
          </div>
          <div className={styles.postFooter}>
            <div className={styles.postFooterRating}>
              <div className={styles.footerRating}>
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
                  {groupComments?.length}
                </Typography>
              </div>
            </div>
            <div className={styles.postComments}>
              <Typography variant='h5'>??????????????????????:</Typography>
              <>
                <AddGroupComment
                  groupPostId={groupPostId}
                  groupId={groupPost?.groupId}
                />
                {loadingComments ? (
                  <p>Loading</p>
                ) : (
                  <GroupCommentList comments={groupComments} />
                )}
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
