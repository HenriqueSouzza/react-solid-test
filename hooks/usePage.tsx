import { useEffect } from "react";
import { useAppContext } from ".";
import { AuthActions } from "@/store";

export const usePage = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    dispatch(AuthActions.getAuth())
  }, [dispatch])

  return {
    authenticated: state.auth.authenticated
  }
}