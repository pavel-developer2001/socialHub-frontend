import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import styles from "./GroupMembers.module.css";

const GroupMembersItem: React.FC<any> = ({ name, userId, status }) => {
  const router = useRouter();
  return (
    <div className={styles.groupMembersItem}>
      <Avatar sx={{ width: 40, height: 40 }}>OP</Avatar>
      <Typography
        variant='body2'
        gutterBottom
        component='div'
        className={styles.groupMembersItemTitle}
      >
        <span>{status}</span>
        <p onClick={() => router.push("/users/" + userId)}>{name}</p>
      </Typography>
    </div>
  );
};

const GroupMembers: React.FC<any> = ({ members }) => {
  return (
    <Paper className={styles.groupMembers}>
      <Typography>Участники: {members?.length}</Typography>
      <div className={styles.groupMembersBody}>
        {members?.map((member: any) => (
          <GroupMembersItem
            key={member?.id}
            name={member?.nameMember}
            userId={member?.userId}
            status={member?.status}
          />
        ))}
      </div>
    </Paper>
  );
};

export default GroupMembers;
