import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import AddIcon from "@material-ui/icons/Add";
import styles from "./GroupPage.module.css";
import Button from "@material-ui/core/Button";
import GroupMembers from "../../components/GroupMembers";
import PostList from "../../components/PostList";

const GroupPage = () => {
  const fakePosts = [
    {
      id: 1,
      userId: 7,
      author: "pro",
      postText: "test group",
      countLikes: 10,
      createdAt: "2021-08-18T11:49:35.179Z",
      picturePost: "",
    },
  ];
  return (
    <MainLayout>
      <Paper className={styles.groupPageHead}>
        <Avatar
          className={styles.groupPageHeadAvatar}
          sx={{ width: 76, height: 76, bgcolor: deepPurple[500] }}
        >
          OP
        </Avatar>
        <Typography className='' variant='h6' gutterBottom component='div'>
          Google Translate
        </Typography>
        <Button variant='outlined' startIcon={<AddIcon />}>
          Присоединиться
        </Button>
      </Paper>
      <div className={styles.groupPageBody}>
        <PostList loading={false} posts={fakePosts} />
        <GroupMembers />
      </div>
    </MainLayout>
  );
};

export default GroupPage;
