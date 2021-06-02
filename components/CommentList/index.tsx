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
import { removeCommentFetch } from "../../store/reducers/postReducer";

const CommentListItem: React.FC<any> = ({
  name,
  commentId,
  text,
  likes,
  date,
}) => {
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
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.commentListItem}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
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
        title={name}
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
        <MenuItem onClick={handleRemoveComment}>
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

const CommentList: React.FC<any> = ({ comments, loading }) => {
  return (
    <div className={styles.commentList}>
      <Typography variant='h5'>Комментарии:</Typography>
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
          />
        ))
      ) : (
        <p>Нет комментариев</p>
      )}
    </div>
  );
};

export default CommentList;