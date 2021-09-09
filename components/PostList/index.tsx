import React from "react";
import styles from "./PostList.module.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { formatDate } from "../../utils/formatDate";

type PostListItemProps = {
  userId: string;
  name: string;
  text: string;
  likes: number;
  date: string;
  imagePost: string;
  postId: string;
};
const PostListItem: React.FC<PostListItemProps> = ({
  userId,
  name,
  text,
  postId,
  likes,
  date,
  imagePost,
}) => {
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.postListItem}>
      <Link href={`/users/${userId}`}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              R
            </Avatar>
          }
          title={name}
          subheader={formatDate(new Date(date))}
        />
      </Link>
      {imagePost ? (
        <CardMedia
          sx={{
            height: 0,
            paddingTop: "56.25%", // 16:9
          }}
          image={imagePost}
          title='Paella dish'
        />
      ) : null}

      <CardContent>
        {" "}
        <Typography
          variant='body2'
          onClick={() => router.push(`/posts/${postId}`)}
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
const PostList: React.FC<any> = ({ posts, loading }) => {
  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        posts.map((post: any) => (
          <PostListItem
            key={post.id}
            postId={post.id}
            userId={post.userId}
            name={post.author}
            text={post.postText}
            likes={post.countLikes}
            date={post.createdAt}
            imagePost={post.picturePost}
          />
        ))
      )}
    </div>
  );
};

export default PostList;
