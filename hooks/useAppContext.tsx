import { AppContext, AppContextProps } from "@/context";
import { useContext } from "react";

export const useAppContext = (): AppContextProps => useContext(AppContext);