'use client';

import { Constants } from "@/constants";
import { StorageBrowser, userPermitted } from "@/utils";
import { redirect } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const useRedirectLogin = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [sessionUser, setSessionUser] = useState<{ data: string | null }>({ data: null });

  const requestSessionUser = useCallback(() => {
    setSessionUser(StorageBrowser.sessionStorage.getItem(Constants.SessionStorage.session));
    setLoading(false);
  }, [setSessionUser, setLoading]);

  useEffect(() => {
    if (!sessionUser.data) {
      requestSessionUser();
    }
  }, [requestSessionUser]);

  useEffect(() => {
    if (sessionUser.data && typeof sessionUser.data === 'object') {
      if (!userPermitted(sessionUser.data)) {
        sessionStorage.removeItem(Constants.SessionStorage.session);
        setLoading(false)
      }
    }
  }, [sessionUser]);

  if (sessionUser.data && !loading) {
    redirect('/dashboard');
  }

  if (!sessionUser.data && !loading) {
    return redirect('/login');
  }

  return null
}