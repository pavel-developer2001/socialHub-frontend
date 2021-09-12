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
      if (global.confirm("Вы действительно хотите удалить пост сообщества?")) {
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
              <MenuItem onClick={handleRemoveGroupPost}>
                <DeleteIcon /> Удалить
              </MenuItem>
              {!isEdit ? (
                <MenuItem onClick={() => setIsEdit(true)}>
                  <EditIcon /> Редактировать
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
                    <CheckIcon /> Обновить пост
                  </MenuItem>
                  <MenuItem onClick={() => setIsEdit(false)}>
                    <CloseIcon /> Отмена
                  </MenuItem>
                </Menu>
              )}
            </Menu>
          </div>
          <div className={styles.postBody}>
            {groupPost?.groupPostPicture ? groupPost?.groupPostPicture : null}

            {!isEdit ? (
              <Typography variant='h6' gutterBottom component='p'>
                {groupPost?.groupPostText}
              </Typography>
            ) : (
              <TextField
                value={groupPostText}
                id='outlined-multiline-static'
                label='Multiline'
                multiline
                rows={4}
                variant='outlined'
                onChange={(e) => setGroupPostText(e.target.value)}
              />
            )}
          </div>
          <div className={styles.postFooter}>
            <div className={styles.postFooterDate}>
              <Typography variant='button' display='block' gutterBottom>
                {/* {formatDate(new Date(groupPost?.createdAt))} */}
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
                {groupComments?.length}
              </Typography>
            </div>
            <div className={styles.postComments}>
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
