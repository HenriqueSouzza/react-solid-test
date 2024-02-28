
import { useMemo, useReducer } from "react";
import { InitialValuesAuth, rootReducer } from "@/store";

export const InitialValues = {
  ...InitialValuesAuth
}

export const useRootContext = () => {
  const [state, dispatch] = useReducer(rootReducer, InitialValues);
  return useMemo(() => ({ state, dispatch }), [state, dispatch]);
}