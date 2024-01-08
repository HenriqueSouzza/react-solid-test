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

  const onClickCreateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget).entries();
    const formObject = Object.fromEntries(formData);
    console.log(formObject);
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
