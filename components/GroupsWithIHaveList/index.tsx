import { Avatar, Card, Typography } from "@material-ui/core";
import React from "react";
import styles from "./GroupsWithIHaveList.module.css";

const GroupsWithIHaveListItem = () => {
  return (
    <div className={styles.blockItem}>
      <Avatar sx={{ width: 30, height: 30 }}>G</Avatar>
      <p>Group Name</p>
    </div>
  );
};
const GroupsWithIHaveList = () => {
  return (
    <Card className={styles.block}>
      <Typography>Сообщетсва: 100</Typography>
      <GroupsWithIHaveListItem />
      <GroupsWithIHaveListItem />
      <GroupsWithIHaveListItem />
      <GroupsWithIHaveListItem />
    </Card>
  );
};

export default GroupsWithIHaveList;
