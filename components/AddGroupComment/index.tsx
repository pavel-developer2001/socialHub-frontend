import { Avatar, Button, IconButton, TextField } from "@material-ui/core";
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
      <Avatar
        alt='Remy Sharp'
        className={styles.avatar}
        src='http://pm1.narvii.com/7587/db8e5b7dac75cf90b8acec4737fb01c5a273a0f8r1-1280-1707v2_uhq.jpg'
      />
      <TextField
        id='outlined-multiline-static'
        label='Оставить комментарий'
        className={styles.addCommentArea}
        multiline
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      {commentText ? (
        <IconButton
          aria-label='add'
          onClick={handleAddNewComment}
          className={styles.addCommentBtn}
        >
          <AddIcon />
        </IconButton>
      ) : null}
    </div>
  );
};

export default AddGroupComment;
