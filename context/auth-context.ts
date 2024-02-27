import { Dispatch, createContext } from "react";
import { InitialValues } from "@/hooks";

export interface AppContextProps {
  state: typeof InitialValues | any
  dispatch: Dispatch<any>
}

export const AppContext = createContext<AppContextProps>({
  state: InitialValues,
  dispatch: () => null,
});