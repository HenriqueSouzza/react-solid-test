import { useState } from "react"

export const useAuth = () => {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

  return {
    isUserLogged
  }
}