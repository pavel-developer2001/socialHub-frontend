import { Button, TextField } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { token } from "../../utils/token";
import jwt_decode from "jwt-decode";
import styles from "./AddGroupComment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addGroupComment } from "../../store/reducers/groupCommentReducer";

const AddGroupComment: React.FC<any> = ({ groupPostId, groupId }) => {
  const [commentText, setCommentText] = React.useState("");
  const userId = token ? jwt_decode(token).id : null;
  const author = token ? jwt_decode(token).user : null;
  const dispatch = useDispatch();
  const handleAddNewComment = async (e: any) => {
    e.preventDefault();
    try {
      const payload = { author, commentText, groupPostId, groupId, userId };
      await dispatch(addGroupComment(payload));
      setCommentText("");
    } catch (error) {}
  };
  return (
    <div className={styles.addComment}>
      <TextField
        id='outlined-multiline-static'
        label='Оставить комментарий'
        className={styles.addCommentArea}
        multiline
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        rows={2}
      />
      <Button
        variant='contained'
        onClick={handleAddNewComment}
        className={styles.addCommentBtn}
        startIcon={<AddIcon />}
      >
        Добавить
      </Button>
    </div>
  );
};

export default AddGroupComment;
