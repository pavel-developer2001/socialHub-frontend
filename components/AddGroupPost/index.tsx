import { Avatar, Button, Paper, TextField } from "@material-ui/core";
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
      setBigForm(false);
    } catch (error) {}
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
          label='Что хотите написать в сообществе?'
          multiline
          className={styles.form}
          rows={bigForm ? 4 : 1}
          onClick={() => setBigForm(true)}
          value={groupPostText}
          onChange={(e) => setGroupPostText(e.target.value)}
        />
        {bigForm ? (
          <div className={styles.btn}>
            {" "}
            <Button
              variant='contained'
              className={styles.addPost__btn}
              disableElevation
              onClick={handleAddGroupPost}
            >
              Опубликовать
            </Button>
          </div>
        ) : null}
      </div>
    </Paper>
  );
};

export default AddGroupPost;
