import { Dispatch } from "react";

import { authApi } from "@/lib/auth/api";
import { AuthAction, AuthDispatchActions, AuthState } from "@/types/auth";

export const authState: AuthState = {
  error: "",
  success: false,
};

export const getAuthActions = (
  dispatch: Dispatch<AuthAction>,
): AuthDispatchActions => ({
  login: async (prevState, credentials, authType) => {
    const { error, success } = await authApi(prevState, credentials, authType);

    dispatch({
      type: "LOGIN",
      payload: { error: error, success: success },
    });
  },
  signup: async (prevState, credentials, authType) => {
    const { error, success } = await authApi(prevState, credentials, authType);

    dispatch({
      type: "SIGNUP",
      payload: { error, success },
    });
  },
});

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        error: action.payload.error,
        success: action.payload.success,
      };
    }
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
