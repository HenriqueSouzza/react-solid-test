'use client';

import { FormEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StorageBrowser } from "@/utils";
import { FormProps } from "@/interfaces";
import { Constants } from "@/constants";

type UsePageLoginProps = FormProps & {}

export const usePageLogin = (): UsePageLoginProps => {
  const { push } = useRouter();
  const [response, setResponse] = useState<any>({ data: '' });

  const requestLogin = useCallback((request: any) => {
    setResponse(StorageBrowser.sessionStorage.setItem({ key: Constants.SessionStorage.session, value: JSON.stringify(request) }));
  }, [setResponse]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget).entries();
    requestLogin(Object.fromEntries(formData));
  }

  useEffect(() => {
    if (response.data) {
      push('/dashboard');
    }
  }, [response]);

  return {
    onSubmit
  }
};
