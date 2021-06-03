import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";

import styles from "./GroupList.module.css";

const GroupListItem = () => {
  return (
    <Paper elevation={3} className={styles.groupListItem}>
      <Avatar sx={{ width: 56, height: 56, bgcolor: deepPurple[500] }}>
        OP
      </Avatar>
      <Typography
        className={styles.groupListItemTitle}
        variant='h6'
        gutterBottom
        component='div'
      >
        <Link href={`/groups/1`}> Google Translate</Link>
      </Typography>
    </Paper>
  );
};

const GroupList = () => {
  return (
    <div className={styles.groupList}>
      <GroupListItem />
      <GroupListItem />
      <GroupListItem />
    </div>
  );
};

export default GroupList;
