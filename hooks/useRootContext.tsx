
import { InitialValuesAuth, rootReducer } from "@/store";
import { useMemo, useReducer } from "react";

export const InitialValues = {
  ...InitialValuesAuth
}

export const useRootContext = () => {
  const [state, dispatch] = useReducer(rootReducer, InitialValues);
  return useMemo(() => ({ state, dispatch }), [state, dispatch]);
}