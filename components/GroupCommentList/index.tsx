import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React from "react";
import styles from "./GroupCommentList.module.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const GroupCommentListItem = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.commentListItem}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton
            aria-label='settings'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title='Title'
        subheader='21.02.2121'
      />

      <Menu
        id='fade-menu'
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem>
          <DeleteIcon /> Удалить
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EditIcon /> Редактировать
        </MenuItem>
      </Menu>

      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
          assumenda similique atque amet minima in itaque cum temporibus
          perferendis, quos quia, quod iusto labore dolores qui ex quis
          consequatur odit!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <Typography variant='body2' color='text.secondary'>
          99
        </Typography>
      </CardActions>
    </Card>
  );
};
const GroupCommentList = () => {
  return (
    <div className={styles.commentList}>
      <Typography variant='h5'>Комментарии:</Typography>
      <GroupCommentListItem />
      <GroupCommentListItem />
      <GroupCommentListItem />
    </div>
  );
};

export default GroupCommentList;
