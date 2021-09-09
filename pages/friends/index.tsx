import React from "react";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import UsersList from "../../components/UsersList";
import MainLayout from "../../layouts/MainLayout";
import { wrapper } from "../../store";
import { setUsers } from "../../store/reducers/userReducer";

const Friends = () => {
  const users = useSelector<any>((state) => state.user.users.data);
  const loading = useSelector<any>((state) => state.user.loading);
  return (
    <MainLayout>
      {loading ? <p>loading</p> : <UsersList users={users} />}
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    //@ts-ignore
    if (!store.getState().placeholderData) {
      store.dispatch(setUsers());
      store.dispatch(END);
    }
    //@ts-ignore
    await store.sagaTask.toPromise();
  }
);

export default Friends;
