import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

import styles from "./GroupList.module.css";

const GroupListItem: React.FC<any> = ({
  groupId,
  titleGroup,
  pictureGroup,
}) => {
  const router = useRouter();
  return (
    <Paper elevation={3} className={styles.groupListItem}>
      {pictureGroup ? (
        pictureGroup
      ) : (
        <Avatar
          className={styles.groupAvatar}
          sx={{ width: 56, height: 56, bgcolor: deepPurple[500] }}
        >
          G
        </Avatar>
      )}
      <div className={styles.data}>
        <Typography
          className={styles.groupListItemTitle}
          variant='h6'
          gutterBottom
          component='div'
        >
          {/* <Link href={`/groups/` + groupId}> </Link> */}
          <p onClick={() => router.push(`/groups/` + groupId)}>{titleGroup}</p>
        </Typography>
        <Typography
          className={styles.groupType}
          variant='h6'
          gutterBottom
          component='div'
        >
          Открытая группа
        </Typography>
        <Typography
          className={styles.groupCountNumber}
          variant='h6'
          gutterBottom
          component='div'
        >
          3 398 участников
        </Typography>
      </div>
    </Paper>
  );
};

const GroupList: React.FC<any> = ({ groups }) => {
  return (
    <div className={styles.groupList}>
      {groups?.map((group: any) => (
        <GroupListItem
          key={group.id}
          groupId={group.id}
          titleGroup={group.titleGroup}
          pictureGroup={group.pictureGroup}
        />
      ))}
    </div>
  );
};

export default GroupList;
