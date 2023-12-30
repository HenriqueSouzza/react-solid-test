'use client';

import { Constants } from "@/constants";
import { StorageBrowser } from "@/utils";
import { redirect } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const useRedirectLogin = () => {
  const [Loading, setLoading] = useState<boolean>(true);
  const [sessionUser, setSessionUser] = useState<{ data: string }>({ data: '' });

  const requestSessionUser = useCallback(() => {
    setSessionUser(StorageBrowser.sessionStorage.getItem(Constants.SessionStorage.session));
    setLoading(false);
  }, [setLoading, setSessionUser])

  useEffect(() => {
    requestSessionUser();
  }, [Loading]);

  if (!sessionUser.data && !Loading) {
    redirect('/login');
  }

  return null
}