import React from "react";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import styles from "./AddComment.module.css";

const AddComment = () => {
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

export default AddComment;
