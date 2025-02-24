import { Dispatch } from "react";

import { authApi } from "@/lib/auth/api";
import { AuthAction, AuthDispatchAction, AuthState } from "@/types/auth";

export const authState: AuthState = {
  error: "",
  success: false,
};

export const getAuthAction =
  (dispatch: Dispatch<AuthAction>) =>
  async (
    prevState: AuthState,
    credentials: { email: string; password: string },
    authType: string,
  ) => {
    const { error, success } = await authApi(prevState, credentials, authType);

    dispatch({
      type: authType,
      payload: { error, success },
    } as AuthAction);
  };

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
    case "SIGNUP":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
