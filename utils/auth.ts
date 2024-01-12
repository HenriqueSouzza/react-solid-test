import { AuthProps } from "@/interfaces";
import { generateHash } from ".";
import { Auth as AuthMock } from "@/__mocks";

export const userFind = ({ username, password }: AuthProps): undefined | boolean | any => (
  AuthMock.find(dataUser => dataUser.username === username && dataUser.password === password)
)