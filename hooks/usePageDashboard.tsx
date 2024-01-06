import { useState } from "react";
import { UserProps } from "@/interfaces";
import { User as userList } from "@/__mocks";
import { Constants } from "@/constants";
import { useRouter } from "next/navigation";

export const usePageDashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { push } = useRouter();

  const onClickControlModal = () => {
    setShowModal(!showModal);
  }

  const onClickCreateUser = (item: UserProps) => {
    console.log(item)
  }

  const onClickEdit = (item: UserProps) => {
    onClickControlModal();
  }

  const onClickDelete = (item: UserProps) => {
    onClickControlModal();
  }

  const onClickSignOut = () => {
    sessionStorage.removeItem(Constants.SessionStorage.session);
    push('/');
  }

  return {
    onClickSignOut,
    onClickCreateUser,
    onClickEdit,
    onClickDelete,
    setShowModal,
    userList,
    showModal
  }
};
