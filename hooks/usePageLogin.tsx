'use client';

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StorageBrowser, generateHash, userFind } from "@/utils";
import { AuthProps, FormProps } from "@/interfaces";
import { Constants } from "@/constants";

type UsePageLoginProps = FormProps & {}

export const usePageLogin = (): UsePageLoginProps => {
  const { push } = useRouter();
  const [response, setResponse] = useState<any>({ data: '' });

  const requestLogin = useCallback((request: any) => {
    setResponse(StorageBrowser.sessionStorage.setItem({ key: Constants.SessionStorage.session, value: JSON.stringify(request) }));
  }, [setResponse]);

  const onSubmit = ({ username, password }: AuthProps) => {
    const userValidated = userFind({
      username: String(generateHash(username)),
      password: String(generateHash(password))
    });

    if (userValidated) {
      requestLogin(userValidated)
    }
  }

  useEffect(() => {
    if (response.data) {
      push('/');
    }
  }, [response]);

  return {
    onSubmit
  }
};
