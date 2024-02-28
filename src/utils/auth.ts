import { AuthProps } from "@/interfaces";
import { Auth as AuthMock } from "@/__mocks__";

export const userFind = ({ username, password }: AuthProps): undefined | boolean | any => (
  AuthMock.find(dataUser => dataUser.username === username && dataUser.password === password)
)