import React from "react";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import styles from "./AddComment.module.css";
import { useDispatch } from "react-redux";
import { addCommentFetch } from "../../store/reducers/postReducer";
import jwt_decode from "jwt-decode";
import { token } from "../../utils/token";
import { Avatar, IconButton } from "@material-ui/core";

const AddComment: React.FC<any> = ({ postId }) => {
  const [commentText, setCommentText] = React.useState("");

  const dispatch = useDispatch();

  const handleAddComment = async (e: any) => {
    e.preventDefault();
    const author = token ? jwt_decode(token).user : null;
    const userId = token ? jwt_decode(token).id : null;
    try {
      const payload = {
        author: author,
        commentText,
        postId,
        userId: userId,
      };
      await dispatch(addCommentFetch(payload));
      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.addComment}>
      <Avatar
        alt='Remy Sharp'
        className={styles.avatar}
        src='http://pm1.narvii.com/7587/db8e5b7dac75cf90b8acec4737fb01c5a273a0f8r1-1280-1707v2_uhq.jpg'
      />
      <TextField
        id='outlined-multiline-static'
        label='Оставить комментарий'
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className={styles.addCommentArea}
        multiline
      />
      {commentText ? (
        <IconButton
          aria-label='add'
          onClick={handleAddComment}
          className={styles.addCommentBtn}
        >
          <AddIcon />
        </IconButton>
      ) : null}
    </div>
  );
};

export default AddComment;
