import { AuthReducer } from "@/store";

export const rootReducer = (state: any, action: any) => ({
  auth: AuthReducer({ state: state.auth, action }),
});
