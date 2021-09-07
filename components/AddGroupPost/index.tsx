import { Button, Paper, TextField } from "@material-ui/core";
import React from "react";
import styles from "./AddGroupPost.module.css";

const AddGroupPost = () => {
  return (
    <Paper elevation={3} className={styles.addPost}>
      <TextField
        id='outlined-multiline-static'
        label='Что хотите написать в сообществе?'
        multiline
        rows={4}
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

export default AddGroupPost;
