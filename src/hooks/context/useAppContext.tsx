import { useContext } from "react";
import { AppContext, AppContextProps } from "@/context";

export const useAppContext = (): AppContextProps => useContext(AppContext);