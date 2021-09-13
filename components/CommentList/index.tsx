import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import styles from "./CommentList.module.css";
import Fade from "@material-ui/core/Fade";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch } from "react-redux";
import {
  editComment,
  removeCommentFetch,
} from "../../store/reducers/postReducer";
import jwt_decode from "jwt-decode";
import { token } from "../../utils/token";
import { formatDate } from "../../utils/formatDate";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const CommentListItem: React.FC<any> = ({
  name,
  commentId,
  text,
  likes,
  date,
  userId,
}) => {
  const myId = token ? jwt_decode(token).id : null;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const handleRemoveComment = async () => {
    try {
      setAnchorEl(null);
      await dispatch(removeCommentFetch(commentId));
    } catch (error) {
      console.log(error);
    }
  };
  const [isEdit, setIsEdit] = React.useState(false);
  const [commentText, setCommentText] = React.useState(text);
  const handleEditComment = async () => {
    const payload = { commentId, commentText };
    await dispatch(editComment(payload));
    setIsEdit(false);
    setAnchorEl(null);
    try {
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
          <IconButton
            aria-label='settings'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {myId == userId ? <MoreVertIcon /> : null}
          </IconButton>
        }
        title={name}
      />
      {myId == userId ? (
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
          <MenuItem onClick={handleRemoveComment}>
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
              <MenuItem onClick={handleEditComment}>
                <CheckIcon /> Обновить комментарий
              </MenuItem>
              <MenuItem onClick={() => setIsEdit(false)}>
                <CloseIcon /> Отмена
              </MenuItem>
            </Menu>
          )}
        </Menu>
      ) : null}
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
              onChange={(e: any) => setCommentText(e.target.value)}
            />
          )}
          <Typography
            variant='body2'
            className={styles.date}
            color='text.secondary'
          >
            {formatDate(new Date(date))} назад
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

const CommentList: React.FC<any> = ({ comments, loading }) => {
  return (
    <div className={styles.commentList}>
      {loading ? (
        <p>Loading Comments</p>
      ) : comments?.length > 0 ? (
        comments.map((comment: any) => (
          <CommentListItem
            key={comment.id}
            name={comment.author}
            commentId={comment.id}
            text={comment.commentText}
            likes={comment.countCommentsLikes}
            date={comment.createdAt}
            userId={comment.userId}
          />
        ))
      ) : (
        <p>Нет комментариев</p>
      )}
    </div>
  );
};

export default CommentList;
