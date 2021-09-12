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
import { removeGroupComment } from "../../store/reducers/groupCommentReducer";

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
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.commentListItem}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
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
        subheader={formatDate(new Date(date))}
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
          <DeleteIcon /> Удалить
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EditIcon /> Редактировать
        </MenuItem>
      </Menu>

      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <Typography variant='body2' color='text.secondary'>
          {likes}
        </Typography>
      </CardActions>
    </Card>
  );
};
const GroupCommentList: React.FC<any> = ({ comments }) => {
  return (
    <div className={styles.commentList}>
      <Typography variant='h5'>Комментарии:</Typography>
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
        <p>Нет комментариев!</p>
      )}
    </div>
  );
};

export default GroupCommentList;
