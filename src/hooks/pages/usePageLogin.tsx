'use client';

import { useEffect } from "react";
import { StorageBrowser, generateHash, userFind } from "@/utils";
import { AuthProps } from "@/interfaces";
import { useAppContext } from "@/hooks";
import { AuthActions } from "@/store";
import { Constants } from "@/constants";
import { useRouter } from "next/navigation";

export const usePageLogin = () => {
  const { state, dispatch } = useAppContext();
  const { push } = useRouter();

  const onSubmit = ({ username, password }: AuthProps) => {
    const isUserValid = userFind({
      username: String(generateHash(username)),
      password: String(generateHash(password))
    });

    StorageBrowser.sessionStorage.setItem({ key: Constants.SessionStorage.session, value: JSON.stringify(isUserValid) });
    dispatch(AuthActions.getAuth());
  }

  useEffect(() => {
    if (state.auth.authenticated) {
      push('/dashboard');
    }
  }, [state, push]);

  useEffect(() => {
    dispatch(AuthActions.getAuth());
  }, [dispatch]);

  return {
    userAuthenticated: state.auth.authenticated,
    onSubmit,
  }
};
