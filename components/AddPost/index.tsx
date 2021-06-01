import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import styles from "./AddPost.module.css";
import { useDispatch } from "react-redux";
import { addPostFetch } from "../../store/reducers/postReducer";

const AddPost = () => {
  const [postText, setPostText] = React.useState("");
  const dispatch = useDispatch();
  const users: any =
    typeof window !== "undefined" && localStorage.getItem("user");
  const handleAddPost = async (e: any) => {
    e.preventDefault();
    try {
      const payload = {
        author: JSON.parse(users).name,
        postText,
        userId: JSON.parse(users).id,
      };
      await dispatch(addPostFetch(payload));
      setPostText("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Paper elevation={3} className={styles.addPost}>
      <TextField
        id='outlined-multiline-static'
        label='С чем хотите поделиться?'
        multiline
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        rows={4}
      />
      <Button
        onClick={handleAddPost}
        variant='contained'
        className={styles.addPost__btn}
        disableElevation
      >
        Добавить
      </Button>
    </Paper>
  );
};

export default AddPost;
