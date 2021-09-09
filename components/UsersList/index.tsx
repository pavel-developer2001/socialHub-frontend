import { Avatar, Card, Link, Typography } from "@material-ui/core";
import React from "react";
import styles from "./UsersList.module.css";

const UsersListItem: React.FC<any> = ({ name, userId }) => {
  return (
    <Card className={styles.blockItem}>
      <Avatar
        alt='Avatar User'
        src='https://pbs.twimg.com/media/DVNPUlXVQAYgfj6.jpg:large'
      />
      <Typography variant='h6' gutterBottom>
        <Link href={"/users/" + userId}> {name}</Link>
      </Typography>
    </Card>
  );
};
const UsersList: React.FC<any> = ({ users }) => {
  return (
    <div className={styles.block}>
      <Typography variant='h5' gutterBottom>
        Список пользователей
      </Typography>
      {users?.map((user: any) => (
        <UsersListItem key={user?.id} name={user?.name} userId={user?.id} />
      ))}
    </div>
  );
};

export default UsersList;
