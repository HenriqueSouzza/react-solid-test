'use client';

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StorageBrowser, generateHash, userFind } from "@/utils";
import { AuthProps, FormProps } from "@/interfaces";
import { Constants } from "@/constants";

export const usePageLogin = () => {
  const [valueInserted, setValueInserted] = useState<boolean>(false);

  const setValueSessionStorage = (request: AuthProps) => {
    StorageBrowser.sessionStorage.setItem({ key: Constants.SessionStorage.session, value: JSON.stringify(request) });
    setValueInserted(true)
  }

  const onSubmit = ({ username, password }: AuthProps) => {
    const userValidated = userFind({
      username: String(generateHash(username)),
      password: String(generateHash(password))
    });

    if (userValidated) {
      setValueSessionStorage(userValidated)
    }
  }

  return {
    onSubmit,
    valueInserted,
  }
};
