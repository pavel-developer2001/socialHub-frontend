import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import AddIcon from "@material-ui/icons/Add";
import styles from "./GroupPage.module.css";
import Button from "@material-ui/core/Button";
import GroupMembers from "../../components/GroupMembers";
import {
  checkSign,
  editGroup,
  removeGroup,
  setGroup,
  signMember,
  unsubcribeMember,
} from "../../store/reducers/groupReducer";
import { wrapper } from "../../store";
import { END } from "redux-saga";
import { useDispatch, useSelector } from "react-redux";
import GroupPostList from "../../components/GroupPostList";
import AddGroupPost from "../../components/AddGroupPost";
import { setGroupPosts } from "../../store/reducers/groupPostReducer";
import { useRouter } from "next/dist/client/router";
import RemoveIcon from "@material-ui/icons/Remove";
import { token } from "../../utils/token";
import jwt_decode from "jwt-decode";
import SettingsIcon from "@material-ui/icons/Settings";
import { formatDate } from "../../utils/formatDate";
import { IconButton, TextField } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const GroupPage = () => {
  const group = useSelector<any>((state) => state.group.group.data);
  const loading = useSelector<any>((state) => state.group.loading);
  const loadingPosts = useSelector<any>((state) => state.groupPost.loading);
  const groupPosts = useSelector<any>(
    (state) => state.groupPost.groupPosts.data
  );
  const dispatch = useDispatch();
  const router = useRouter();
  React.useEffect(() => {
    dispatch(setGroupPosts(router.query.id));
  }, []);

  const nameMember = token ? jwt_decode(token).user : null;
  const userId = token ? jwt_decode(token).id : null;
  const signed = useSelector<any>((state) => state.group.signed);
  const payload = { groupId: router.query.id, userId };
  React.useEffect(() => {
    dispatch(checkSign(payload));
  }, [signed]);

  const handleSigned = async () => {
    try {
      const payload = { nameMember, groupId: group?.group.id, userId };
      await dispatch(signMember(payload));
    } catch (error) {}
  };
  const handleUnsubscribe = async () => {
    try {
      const payload = { groupId: group?.group.id, userId };
      await dispatch(unsubcribeMember(payload));
    } catch (error) {}
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleRemoveGroup = async () => {
    try {
      if (global.confirm("???? ?????????????????????????? ???????????? ?????????????? ?????????????????????")) {
        await dispatch(removeGroup(group?.group.id));
        router.push("/");
        setAnchorEl(null);
      }
      setAnchorEl(null);
    } catch (error) {}
  };
  const [titleGroup, setTitleGroup] = React.useState(group?.group.titleGroup);
  const [description, setDescription] = React.useState(
    group?.group.description
  );
  const [isEdit, setIsEdit] = React.useState(false);
  const handleEditGroup = async () => {
    try {
      const payload = { groupId: group?.group.id, titleGroup, description };
      await dispatch(editGroup(payload));
      setIsEdit(false);
      setAnchorEl(null);
    } catch (error) {}
  };
  return (
    <MainLayout>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <div className={styles.mainBlock}>
            <div className={styles.leftBlock}>
              <Paper className={styles.infoBlock}>
                {!isEdit ? (
                  <>
                    <Typography
                      variant='h6'
                      className={styles.title}
                      component='h2'
                    >
                      {group?.group.titleGroup}
                    </Typography>
                    <Typography
                      variant='h6'
                      className={styles.text}
                      component='h2'
                    >
                      {group?.group.description}
                    </Typography>
                  </>
                ) : (
                  <>
                    <TextField
                      value={titleGroup}
                      id='outlined-multiline-static'
                      label='Multiline'
                      multiline
                      rows={4}
                      variant='outlined'
                      onChange={(e) => setTitleGroup(e.target.value)}
                    />
                    <TextField
                      value={description}
                      id='outlined-multiline-static'
                      label='Multiline'
                      multiline
                      rows={4}
                      variant='outlined'
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </>
                )}
                <Typography variant='h6' className={styles.date} component='h2'>
                  {" "}
                  ???????????????????? ???????? ??????????????: <span>{group?.group.createdAt}</span>
                  {/* {formatDate(new Date(group?.group.createdAt))} */}
                </Typography>
              </Paper>
              <div className={styles.dataBlock}>
                <AddGroupPost
                  groupPostAuthor={group?.group.titleGroup}
                  groupId={group?.group.id}
                />
                {loadingPosts ? (
                  <p>loading</p>
                ) : groupPosts?.length > 0 ? (
                  <GroupPostList groupPosts={groupPosts} />
                ) : (
                  <p>??????????</p>
                )}
              </div>
            </div>
            <div className={styles.rightBlock}>
              <Paper className={styles.avatarBlock}>
                {" "}
                {group?.group.pictureGroup ? (
                  <Avatar
                    className={styles.groupPageHeadAvatar}
                    src={group?.group.pictureGroup}
                    sx={{ width: 200, height: 200, bgcolor: deepPurple[500] }}
                  />
                ) : (
                  <Avatar
                    className={styles.groupPageHeadAvatar}
                    sx={{ width: 200, height: 200, bgcolor: deepPurple[500] }}
                  >
                    G
                  </Avatar>
                )}
                {signed ? (
                  <Button
                    variant='outlined'
                    onClick={handleUnsubscribe}
                    startIcon={<RemoveIcon />}
                  >
                    ????????????????????
                  </Button>
                ) : (
                  <Button
                    variant='outlined'
                    onClick={handleSigned}
                    startIcon={<AddIcon />}
                  >
                    ????????????????????????????
                  </Button>
                )}
              </Paper>
              <Paper className={styles.settingBlock}>
                <div>
                  <Button
                    aria-controls='simple-menu'
                    aria-haspopup='true'
                    onClick={handleClick}
                  >
                    <IconButton
                      aria-label='delete'
                      className={styles.settingsGroup}
                    >
                      <SettingsIcon /> <span>?????????????????? ????????????????????</span>
                    </IconButton>
                  </Button>
                  <Menu
                    id='simple-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleRemoveGroup}>
                      <DeleteIcon /> ??????????????
                    </MenuItem>
                    {!isEdit ? (
                      <MenuItem onClick={() => setIsEdit(true)}>
                        <EditIcon /> ??????????????????????????
                      </MenuItem>
                    ) : (
                      <Menu
                        id='fade-menu'
                        MenuListProps={{
                          "aria-labelledby": "fade-button",
                        }}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleEditGroup}>
                          <CheckIcon /> ???????????????? ????????
                        </MenuItem>
                        <MenuItem onClick={() => setIsEdit(false)}>
                          <CloseIcon /> ????????????
                        </MenuItem>
                      </Menu>
                    )}
                  </Menu>
                </div>
              </Paper>
              <Paper className={styles.membersBlock}>
                <GroupMembers members={group?.groupMembers} />
              </Paper>
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
};
export const getServerSideProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    //@ts-ignore
    if (!store.getState().placeholderData) {
      store.dispatch(setGroup(params?.id));
      store.dispatch(END);
    }
    //@ts-ignore
    await store.sagaTask.toPromise();
  }
);
export default GroupPage;
