import { Constants } from "@/constants";
import { AuthProps } from "@/interfaces";
import { userFind } from "@/utils";
import { useEffect, useState } from "react"

export const useAuth = () => {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const dataLocalStorage = sessionStorage.getItem(Constants.SessionStorage.session)
    if (dataLocalStorage) {
      const { username, password }: AuthProps = JSON.parse(dataLocalStorage);
      setLoginUser({ username, password });
    }

    if (!dataLocalStorage) {
      setLoading(false)
    }

  }, [setIsUserLogged, setLoading])

  const setLoginUser = ({ username, password }: AuthProps) => {
    if (userFind({ username, password })) {
      setIsUserLogged(true);
    }
    setLoading(false);
  }

  const onClickAuth = ({ username, password }: AuthProps) => {
    if (!userFind({ username, password })) {
      return;
    }

    setIsUserLogged(true);
  }

  return {
    onClickAuth,
    loading,
    isUserLogged,
  }
}