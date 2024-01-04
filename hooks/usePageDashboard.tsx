import { UserProps } from "@/interfaces";
import { User as UserList } from "@/__mocks";

export const usePageDashboard = () => {
  const onClickEdit = (item: UserProps) => {
    console.log(item);
  }

  const onClickDelete = (item: UserProps) => {
    console.log(item);
  }

  return {
    onClickEdit,
    onClickDelete,
    userList: UserList,
  }
};
