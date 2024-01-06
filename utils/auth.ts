import { AuthProps } from "@/interfaces";
import { generateHash } from ".";
import { Auth as AuthMock } from "@/__mocks";

export const userPermitted = ({ username, password }: AuthProps): undefined | boolean | any => {
  username = String(generateHash(username));
  password = String(generateHash(password));

  return AuthMock.find(dataUser => dataUser.username == username && dataUser.password == password)
}