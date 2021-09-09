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

const GroupCommentListItem: React.FC<any> = ({
  userName,
  text,
  likes,
  date,
  id,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          <IconButton
            aria-label='settings'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={userName}
        subheader={date}
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
        <MenuItem>
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
          />
        ))
      ) : (
        <p>Нет комментариев!</p>
      )}
    </div>
  );
};

export default GroupCommentList;
