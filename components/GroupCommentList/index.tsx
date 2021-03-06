import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React from "react";
import styles from "./GroupCommentList.module.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { formatDate } from "../../utils/formatDate";
import jwt_decode from "jwt-decode";
import { token } from "../../utils/token";
import { useDispatch } from "react-redux";
import {
  editGroupComment,
  removeGroupComment,
} from "../../store/reducers/groupCommentReducer";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const GroupCommentListItem: React.FC<any> = ({
  userName,
  text,
  likes,
  date,
  id,
  userId,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const myId = token ? jwt_decode(token).id : null;
  const dispatch = useDispatch();
  const handleRemoveGroupComment = async () => {
    try {
      setAnchorEl(null);
      await dispatch(removeGroupComment(id));
    } catch (error) {
      console.log(error);
    }
  };
  const [commentText, setCommentText] = React.useState(text);
  const [isEdit, setIsEdit] = React.useState(false);
  const handleEditGroupComment = async () => {
    try {
      const payload = { groupCommentId: id, commentText };
      await dispatch(editGroupComment(payload));
      setIsEdit(false);
      setAnchorEl(null);
    } catch (error) {}
  };
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.commentListItem}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            className={styles.avatar}
            aria-label='recipe'
          >
            U
          </Avatar>
        }
        action={
          myId == userId ? (
            <IconButton
              aria-label='settings'
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          ) : null
        }
        title={userName}
      />

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
        <MenuItem onClick={handleRemoveGroupComment}>
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
            <MenuItem onClick={handleEditGroupComment}>
              <CheckIcon /> ???????????????? ????????
            </MenuItem>
            <MenuItem onClick={() => setIsEdit(false)}>
              <CloseIcon /> ????????????
            </MenuItem>
          </Menu>
        )}
      </Menu>

      <CardContent className={styles.content}>
        <div className={styles.leftContent}>
          {!isEdit ? (
            <Typography
              variant='body2'
              className={styles.text}
              color='text.secondary'
            >
              {text}
            </Typography>
          ) : (
            <TextField
              value={commentText}
              id='outlined-multiline-static'
              label='Multiline'
              multiline
              rows={4}
              variant='outlined'
              onChange={(e) => setCommentText(e.target.value)}
            />
          )}
          <Typography
            variant='body2'
            className={styles.date}
            color='text.secondary'
          >
            {formatDate(new Date(date))} ??????????
          </Typography>
        </div>
        <div className={styles.rigthContent}>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <Typography
            variant='body2'
            className={styles.likes}
            color='text.secondary'
          >
            {likes}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
const GroupCommentList: React.FC<any> = ({ comments }) => {
  return (
    <div className={styles.commentList}>
      {comments?.length > 0 ? (
        comments.map((comment: any) => (
          <GroupCommentListItem
            key={comment?.id}
            userName={comment?.author}
            text={comment?.commentText}
            likes={comment?.countCommentsLikes}
            date={comment?.createdAt}
            id={comment?.id}
            userId={comment?.userId}
          />
        ))
      ) : (
        <p>?????? ????????????????????????!</p>
      )}
    </div>
  );
};

export default GroupCommentList;
