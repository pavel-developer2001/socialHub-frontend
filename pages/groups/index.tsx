import React from "react";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import CreateGroup from "../../components/CreateGroup";
import GroupList from "../../components/GroupList";
import MainLayout from "../../layouts/MainLayout";
import { wrapper } from "../../store";
import { setGroups } from "../../store/reducers/groupReducer";

const Groups = () => {
  const groups = useSelector<any>((state) => state.group.groups.data);
  const loading = useSelector<any>((state) => state.group.loading);
  return (
    <MainLayout>
      <CreateGroup />
      {loading ? <p>Loading</p> : <GroupList groups={groups} />}
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getStaticProps(async ({ store }) => {
  //@ts-ignore
  if (!store.getState().placeholderData) {
    store.dispatch(setGroups());
    store.dispatch(END);
  }
  //@ts-ignore
  await store.sagaTask.toPromise();
});
export default Groups;
