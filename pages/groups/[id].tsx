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
import GroupPostList from "../../components/GroupPostList";

const GroupPage = () => {
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
        <GroupPostList />
        <GroupMembers />
      </div>
    </MainLayout>
  );
};

export default GroupPage;
