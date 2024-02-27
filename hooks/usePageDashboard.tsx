import { useEffect, useState } from "react";
import { UserProps } from "@/interfaces";
import { User } from "@/__mocks";
import { Constants } from "@/constants";
import { useRouter } from "next/navigation";
import { AuthActions } from "@/store";
import { useAppContext } from ".";

interface ShowModalDashboardProps {
  create?: boolean
  edit?: boolean
  delete?: boolean
}

export const usePageDashboard = () => {
  const [showModal, setShowModal] = useState<ShowModalDashboardProps>({
    create: false,
    edit: false,
    delete: false,
  });
  const [userList, setUserList] = useState<Array<UserProps>>(User);
  const [userSelected, setUserSelected] = useState<UserProps>();
  const { push } = useRouter();
  const { dispatch, state } = useAppContext();

  const resetShowModal = () => {
    showModal.create = false
    showModal.edit = false
    showModal.delete = false

    setShowModal({ ...showModal });
  }

  const onSubmitForm = (dataForm: UserProps) => {
    if (showModal.create) {
      userList.push(Object.assign({ id: userList[userList.length - 1].id + 1 }, dataForm))
    }

    const keyUser = userList.findIndex(user => user.id === userSelected?.id);

    if (showModal.edit && userSelected) {
      userList.splice(keyUser, 1, Object.assign({ id: userSelected?.id }, dataForm))
    }

    if (showModal.delete) {
      userList.splice(keyUser, 1)
    }

    setUserList(userList);
    resetShowModal();
  }

  const onClickSetShowModal = (value: ShowModalDashboardProps) => {
    resetShowModal();
    setShowModal({ ...showModal, ...value });
  }

  const onClickCreate = () => {
    onClickSetShowModal({ create: !showModal.create });
  }

  const onClickEdit = (item?: UserProps) => {
    setUserSelected(item);
    onClickSetShowModal({ edit: !showModal.edit });
  }

  const onClickDelete = (item?: UserProps) => {
    setUserSelected(item);
    onClickSetShowModal({ delete: !showModal.delete });
  }

  const onClickSignOut = () => {
    sessionStorage.removeItem(Constants.SessionStorage.session);
    dispatch(AuthActions.getAuth());
    push('/')
  }

  return {
    onClickSignOut,
    onClickEdit,
    onClickCreate,
    onClickDelete,
    onSubmitForm,
    onClickSetShowModal,
    userList,
    userSelected,
    showModal
  }
};
