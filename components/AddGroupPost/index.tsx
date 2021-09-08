import { Button, Paper, TextField } from "@material-ui/core";
import React from "react";
import { token } from "../../utils/token";
import jwt_decode from "jwt-decode";
import styles from "./AddGroupPost.module.css";
import { useDispatch } from "react-redux";
import { addGroupPost } from "../../store/reducers/groupPostReducer";

const AddGroupPost: React.FC<any> = ({ groupPostAuthor, groupId }) => {
  const [groupPostText, setGroupPostText] = React.useState("");
  const userId = token ? jwt_decode(token).id : null;
  const dispatch = useDispatch();
  const handleAddGroupPost = async (e: any) => {
    e.preventDefault();
    try {
      const payload = {
        groupPostText,
        groupPostAuthor,
        groupId,
        userId,
      };
      await dispatch(addGroupPost(payload));
      setGroupPostText("");
    } catch (error) {}
  };
  return (
    <Paper elevation={3} className={styles.addPost}>
      <TextField
        id='outlined-multiline-static'
        label='Что хотите написать в сообществе?'
        multiline
        rows={4}
        value={groupPostText}
        onChange={(e) => setGroupPostText(e.target.value)}
      />
      <Button
        variant='contained'
        className={styles.addPost__btn}
        disableElevation
        onClick={handleAddGroupPost}
      >
        Добавить
      </Button>
    </Paper>
  );
};

export default AddGroupPost;
