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

import styles from "./CommentList.module.css";

const CommentListItem: React.FC<any> = ({
  name,
  commentId,
  text,
  likes,
  date,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.commentListItem}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={date}
      />

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
