import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import styles from "./AddPost.module.css";
import { useDispatch } from "react-redux";
import { addPostFetch } from "../../store/reducers/postReducer";
import jwt_decode from "jwt-decode";
import { token } from "../../utils/token";
import { Avatar } from "@material-ui/core";

const AddPost = () => {
  const [postText, setPostText] = React.useState("");
  const dispatch = useDispatch();

  const handleAddPost = async (e: any) => {
    e.preventDefault();
    //@ts-ignore
    const author = token ? jwt_decode(token).user : null;
    //@ts-ignore
    const userId = token ? jwt_decode(token).id : null;
    try {
      const payload = {
        author: author,
        postText,
        userId: userId,
      };
      await dispatch(addPostFetch(payload));
      setPostText("");
      setBigForm(false);
    } catch (error) {
      console.log(error);
    }
  };
  const [bigForm, setBigForm] = React.useState(false);
  return (
    <Paper elevation={3} className={styles.addPost}>
      <Avatar
        alt='Remy Sharp'
        className={styles.avatar}
        src='https://s1.zerochan.net/Yuuki.Makoto.%28PERSONA.3%29.600.2507109.jpg'
      />
      <div className={styles.content}>
        <TextField
          id='outlined-multiline-static'
          className={styles.form}
          label='С чем хотите поделиться?'
          multiline
          value={postText}
          onClick={() => setBigForm(true)}
          onChange={(e) => setPostText(e.target.value)}
          rows={bigForm ? 4 : 1}
        />
        {bigForm ? (
          <div className={styles.btn}>
            <Button
              onClick={handleAddPost}
              variant='contained'
              className={styles.addPost__btn}
              disableElevation
            >
              Опубликовать
            </Button>
          </div>
        ) : null}
      </div>
    </Paper>
  );
};

export default AddPost;
