import { Dispatch } from "react";

import authApi from "@/lib/auth/api";
import {
  AuthAction,
  AuthActionType,
  AuthDispatchActions,
  AuthState,
} from "@/types/auth";

export const authState: AuthState = {
  error: "",
  success: false,
};

const handleAuthAction = async (
  dispatch: Dispatch<AuthAction>,
  prevState: { error: string; success: boolean },
  credentials: { email: string; password: string },
  authType: string,
  type: AuthActionType,
) => {
  const { error, success } = await authApi(prevState, credentials, authType);

  dispatch({
    type,
    payload: { error, success },
  } as AuthAction);
};

export const getAuthActions = (
  dispatch: Dispatch<AuthAction>,
): AuthDispatchActions => {
  const authHandler =
    (type: AuthActionType) =>
    (
      prevState: AuthState,
      credentials: { email: string; password: string },
      authType: string,
    ) =>
      handleAuthAction(dispatch, prevState, credentials, authType, type);

  return {
    login: authHandler("LOGIN"),
    signup: authHandler("SIGNUP"),
  };
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
