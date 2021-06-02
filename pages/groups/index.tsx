import React from "react";
import CreateGroup from "../../components/CreateGroup";
import GroupList from "../../components/GroupList";
import MainLayout from "../../layouts/MainLayout";

const Groups = () => {
  return (
    <MainLayout>
      Сообщества
      <CreateGroup />
      <GroupList />
    </MainLayout>
  );
};

export default Groups;
