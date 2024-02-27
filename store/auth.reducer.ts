import { StorageBrowser } from "@/utils";
import { GET_AUTH } from "./auth.types";
import { Constants } from "@/constants";

interface AuthReducerProps {
  state: any
  action: any
}

export const InitialValuesAuth = ({
  auth: {
    authenticated: false
  }
})

export const AuthReducer = ({ state = InitialValuesAuth, action }: AuthReducerProps) => {
  switch (action?.type) {
    case GET_AUTH:
      return {
        ...state,
        authenticated: StorageBrowser.sessionStorage.getItem(Constants.SessionStorage.session).data
      }
    default:
      return {
        ...state,
      }
  }
}