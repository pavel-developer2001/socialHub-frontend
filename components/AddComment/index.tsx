import React from "react";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import styles from "./AddComment.module.css";
import { useDispatch } from "react-redux";
import { addCommentFetch } from "../../store/reducers/postReducer";
import jwt_decode from "jwt-decode";

const AddComment: React.FC<any> = ({ postId }) => {
  const [commentText, setCommentText] = React.useState("");

  const dispatch = useDispatch();
  const token: string | false | null =
    typeof window !== "undefined" && localStorage.getItem("token");
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
      <TextField
        id='outlined-multiline-static'
        label='Оставить комментарий'
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className={styles.addCommentArea}
        multiline
        rows={2}
      />
      <Button
        variant='contained'
        onClick={handleAddComment}
        className={styles.addCommentBtn}
        startIcon={<AddIcon />}
      >
        Добавить
      </Button>
    </div>
  );
};

export default AddComment;
