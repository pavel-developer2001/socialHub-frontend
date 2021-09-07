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

const GroupPostListItem: React.FC<any> = ({}) => {
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.groupPostListItem}>
      <Link href={`/groups/8`}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              G
            </Avatar>
          }
          title='Demon'
          subheader='5 января 2020 года'
        />
      </Link>
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "56.25%", // 16:9
        }}
        image='https://www.wallpaperup.com/uploads/wallpapers/2019/06/19/1326591/fec4c7fe5cbb97a66349828420b9240c.jpg'
        title='Paella dish'
      />

      <CardContent>
        {" "}
        <Typography
          variant='body2'
          onClick={() => router.push(`/groups/post/1`)}
          color='text.secondary'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          expedita unde praesentium animi nesciunt quasi a beatae amet facere
          quo, vero rerum distinctio itaque hic molestias, suscipit vel harum!
          Corporis.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <Typography variant='body2' color='text.secondary'>
          100
        </Typography>
      </CardActions>
    </Card>
  );
};
const GroupPostList: React.FC<any> = () => {
  return (
    <div className={styles.groupPostList}>
      <GroupPostListItem />
      <GroupPostListItem />
      <GroupPostListItem />
    </div>
  );
};

export default GroupPostList;
