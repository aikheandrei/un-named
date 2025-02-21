import { Dispatch } from "react";

import { authApi } from "@/lib/auth/api";
import { AuthAction, AuthDispatchActions, AuthState } from "@/types/auth";

export const authState: AuthState = {
  error: "",
  success: false,
};

const handleAuthAction = async (
  dispatch: Dispatch<AuthAction>,
  prevState: { error: string; success: boolean } | undefined,
  credentials: { email: string; password: string },
  authType: string,
  type: "LOGIN" | "SIGNUP",
) => {
  const { error, success } = await authApi(prevState, credentials, authType);

  dispatch({
    type,
    payload: { error, success },
  });
};

export const getAuthActions = (
  dispatch: Dispatch<AuthAction>,
): AuthDispatchActions => ({
  login: async (prevState, credentials, authType) => {
    handleAuthAction(dispatch, prevState, credentials, authType, "LOGIN");
  },
  signup: async (prevState, credentials, authType) => {
    handleAuthAction(dispatch, prevState, credentials, authType, "LOGIN");
  },
});

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
    case "SIGNUP":
      return {
        ...state,
        error: action.payload.error,
        success: action.payload.success,
      };
    default:
      return state;
  }
};

export default authReducer;
