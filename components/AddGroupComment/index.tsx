import { Button, TextField } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import styles from "./AddGroupComment.module.css";

const AddGroupComment = () => {
  return (
    <div className={styles.addComment}>
      <TextField
        id='outlined-multiline-static'
        label='Оставить комментарий'
        className={styles.addCommentArea}
        multiline
        rows={2}
      />
      <Button
        variant='contained'
        className={styles.addCommentBtn}
        startIcon={<AddIcon />}
      >
        Добавить
      </Button>
    </div>
  );
};

export default AddGroupComment;
