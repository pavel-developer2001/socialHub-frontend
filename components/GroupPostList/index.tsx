import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import styles from "./GroupPostList.module.css";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const GroupPostListItem: React.FC<any> = ({
  groupId,
  author,
  date,
  cover,
  text,
  likes,
  id,
}) => {
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.groupPostListItem}>
      <Link href={`/groups/` + groupId}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              G
            </Avatar>
          }
          title={author}
          subheader={date}
        />
      </Link>
      {cover ? cover : null}

      <CardContent>
        {" "}
        <Typography
          variant='body2'
          onClick={() => router.push(`/groups/post/` + id)}
          color='text.secondary'
        >
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <Typography variant='body2' color='text.secondary'>
          {likes}
        </Typography>
      </CardActions>
    </Card>
  );
};
const GroupPostList: React.FC<any> = ({ groupPosts }) => {
  return (
    <div className={styles.groupPostList}>
      {groupPosts?.map((post: any) => (
        <GroupPostListItem
          key={post.id}
          id={post.id}
          author={post.groupPostAuthor}
          text={post.groupPostText}
          cover={post.groupPostPicture}
          date={post.createdAt}
          groupId={post.groupId}
          likes={post.groupPostCountLikes}
        />
      ))}
    </div>
  );
};

export default GroupPostList;
