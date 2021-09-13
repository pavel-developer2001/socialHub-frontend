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
      <Avatar sx={{ width: 50, height: 50 }}>U</Avatar>
      <div className={styles.groupMembersItemTitle}>
        <span>{status}</span>
        <p onClick={() => router.push("/users/" + userId)}>{name}</p>
      </div>
    </div>
  );
};

const GroupMembers: React.FC<any> = ({ members }) => {
  return (
    <div className={styles.groupMembers}>
      <Typography className={styles.count}>
        Участники: <strong>{members?.length}</strong>
      </Typography>
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
    </div>
  );
};

export default GroupMembers;
