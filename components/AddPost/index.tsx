import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import styles from "./AddPost.module.css";

const AddPost = () => {
  return (
    <Paper elevation={3} className={styles.addPost}>
      <TextField
        id='outlined-multiline-static'
        label='С чем хотите поделиться?'
        multiline
        rows={4}
        defaultValue=''
      />
      <Button
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
