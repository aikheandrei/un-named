import { Dispatch, useReducer } from "react";
import { AuthError } from "@supabase/supabase-js";

const handleError = (error: unknown) => {
  const errorMessage =
    error instanceof AuthError ? error.message : "Unknown error";

  return new Error(errorMessage);
};

const authActions = async (
  prevState: { error: string; success: boolean } | undefined,
  credentials: { email: string; password: string },
  authType: string,
) => {
  const API_URL = "http://localhost:3000/api/auth";

  try {
    const userCredentials = {
      email: credentials.email,
      password: credentials.password,
    };

    const response = await fetch(`${API_URL}/${authType}`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      return { error: responseData.error, success: prevState?.success };
    }

    return { success: true, ...responseData };
  } catch (error) {
    throw handleError(error);
  }
};

interface AuthDispatchActions {
  login: (
    prevState: { error: string; success: boolean } | undefined,
    credentials: { email: string; password: string },
    authType: string,
  ) => void;
  signup: (
    prevState: { error: string; success: boolean } | undefined,
    credentials: { email: string; password: string },
    authType: string,
  ) => void;
}

type AuthAction =
  | { type: "LOGIN"; payload: AuthState }
  | { type: "SIGNUP"; payload: AuthState };

interface AuthState {
  error: string;
  success: boolean;
}

export const getAuthActions = (
  dispatch: Dispatch<AuthAction>,
): AuthDispatchActions => ({
  login: async (prevState, credentials, authType) => {
    const { error, success } = await authActions(
      prevState,
      credentials,
      authType,
    );

    // console.log(error, success);

    dispatch({
      type: "LOGIN",
      payload: { error: error, success: success },
    });
  },
  signup: async (prevState, credentials, authType) => {
    const { error, success } = await authActions(
      prevState,
      credentials,
      authType,
    );

    dispatch({
      type: "SIGNUP",
      payload: { error, success },
    });
  },
});

export const authReducer = (state: AuthState, action: AuthAction) => {
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

const callAuthReducer = (
  prevState: { error: string; success: boolean } | undefined,
  credentials: { email: string; password: string },
  authType: string,
) => {
  const authState: AuthState = {
    error: "",
    success: false,
  };

  const [state, dispatch] = useReducer(authReducer, authState);

  const authAction = getAuthActions(dispatch);

  authAction.login(prevState, credentials, authType);

  return { error: state.error, success: state.success };
};

const AuthApi = {
  login: async (
    prevState: { error: string; success: boolean } | undefined,
    credentials: { email: string; password: string },
  ): Promise<AuthState> => {
    return callAuthReducer(prevState, credentials, "login");
  },

  signup: async (
    prevState: { error: string; success: boolean } | undefined,
    credentials: { email: string; password: string },
  ): Promise<AuthState> => {
    return callAuthReducer(prevState, credentials, "signup");
  },
};

export default AuthApi;
