import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

import styles from "./CreateGroup.module.css";
import { token } from "../../utils/token";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { addGroup } from "../../store/reducers/groupReducer";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const [titleGroup, setTitleGroup] = React.useState("");
  const [description, setDescription] = React.useState("");
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  const creator = token ? jwt_decode(token).user : null;
  const userId = token ? jwt_decode(token).id : null;

  const dispatch = useDispatch();
  const handleAddGroup = async (e: any) => {
    e.preventDefault();
    try {
      const payload = {
        titleGroup,
        description,
        creatorGroup: creator,
        userId: userId,
      };
      await dispatch(addGroup(payload));
      setTitleGroup("");
      setDescription("");
      onClose(selectedValue);
    } catch (error) {}
  };
  return (
    <Dialog
      className={styles.createGroupModal}
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}
    >
      <DialogTitle id='simple-dialog-title'>
        Создать новое сообщество
      </DialogTitle>
      <List>
        <ListItem>
          <TextField
            value={titleGroup}
            onChange={(e) => setTitleGroup(e.target.value)}
            id='standard-basic'
            label='Название сообщества'
            variant='standard'
          />
        </ListItem>
        <ListItem>
          <TextField
            id='standard-multiline-static'
            label='Описание сообщества'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
            variant='standard'
          />
        </ListItem>
        <ListItem>
          <Button
            variant='contained'
            disabled={titleGroup === "" || description === ""}
            onClick={handleAddGroup}
            startIcon={<AddIcon />}
          >
            Создать
          </Button>
        </ListItem>
      </List>
    </Dialog>
  );
}

const CreateGroup = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };
  return (
    <div>
      <Typography variant='subtitle1' component='div'></Typography>
      <br />
      <Button
        variant='contained'
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        Создать сообщество
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default CreateGroup;
