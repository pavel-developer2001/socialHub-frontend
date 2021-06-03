import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import styles from "./GroupMembers.module.css";

const GroupMembersItem = () => {
  return (
    <div className={styles.groupMembersItem}>
      <Avatar sx={{ width: 40, height: 40 }}>OP</Avatar>
      <Typography
        variant='body2'
        gutterBottom
        component='div'
        className={styles.groupMembersItemTitle}
      >
        <Link href={``}> Google Translate</Link>
      </Typography>
    </div>
  );
};

const GroupMembers = () => {
  return (
    <Paper className={styles.groupMembers}>
      <Typography>Участники: 100</Typography>
      <div className={styles.groupMembersBody}>
        <GroupMembersItem />
        <GroupMembersItem />
        <GroupMembersItem />
        <GroupMembersItem />
        <GroupMembersItem />
        <GroupMembersItem />
        <GroupMembersItem />
        <GroupMembersItem />
        <GroupMembersItem />
      </div>
    </Paper>
  );
};

export default GroupMembers;
