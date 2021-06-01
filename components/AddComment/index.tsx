import React from "react";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import styles from "./AddComment.module.css";
import { useDispatch } from "react-redux";
import { addCommentFetch } from "../../store/reducers/postReducer";

const AddComment: React.FC<any> = ({ postId }) => {
  const [commentText, setCommentText] = React.useState("");

  const dispatch = useDispatch();
  const users: any =
    typeof window !== "undefined" && localStorage.getItem("user");

  const handleAddComment = async (e: any) => {
    e.preventDefault();
    try {
      const payload = {
        author: JSON.parse(users).name,
        commentText,
        postId,
        userId: JSON.parse(users).id,
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
