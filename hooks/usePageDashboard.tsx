import { useState } from "react";
import { UserProps } from "@/interfaces";
import { User } from "@/__mocks";
import { Constants } from "@/constants";
import { useRouter } from "next/navigation";

export const usePageDashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userList, setUserList] = useState<Array<UserProps>>(User);
  const [userSelected, setUserSelected] = useState<UserProps>();
  const { push } = useRouter();

  const onClickControlModal = () => {
    setShowModal(!showModal);
  }

  const onSubmitForm = (dataForm: UserProps) => {
    if (!userSelected) {
      userList.push(Object.assign({ id: userList.length + 1 }, dataForm))
    }

    if (userSelected?.id) {
      userList[userSelected?.id] = Object.assign({ id: userSelected?.id }, dataForm)
    }

    setUserList(userList);
    setShowModal(!showModal);
  }

  const onClickEdit = (item: UserProps) => {
    setUserSelected(item);
    onClickControlModal();
  }

  const onClickDelete = (item: UserProps) => {
    const userListCurrent = userList.filter(user => user.id !== item.id)
    setUserList(userListCurrent);
  }

  const onClickSignOut = () => {
    sessionStorage.removeItem(Constants.SessionStorage.session);
    push('/');
  }

  return {
    onClickSignOut,
    onSubmitForm,
    onClickEdit,
    onClickDelete,
    setShowModal,
    userList,
    userSelected,
    showModal
  }
};
