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
  prevState: { error: string; success: boolean } | undefined;
  credentials: { email: string; password: string };
  authType: string;
}

export const getAuthActions = (
  dispatch: Dispatch<AuthAction>,
): AuthDispatchActions => ({
  login: (prevState, credentials, authType) =>
    dispatch({
      type: "LOGIN",
      payload: { prevState, credentials, authType },
    }),
  signup: (prevState, credentials, authType) =>
    dispatch({
      type: "SIGNUP",
      payload: { prevState, credentials, authType },
    }),
});

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return {
        prevState: action.payload.prevState,
        credentials: action.payload.credentials,
        authType: action.payload.authType,
      };
    case "SIGNUP":
      return {
        prevState: action.payload.prevState,
        credentials: action.payload.credentials,
        authType: action.payload.authType,
      };
    default:
      return state;
  }
};

const authState: AuthState = {
  prevState: { error: "", success: false },
  credentials: { email: "", password: "" },
  authType: "",
};

// const [state, dispatch] = useReducer(authReducer, authState);
//
// const authAction = getAuthActions(dispatch);

export class AuthApi {
  static async login(
    prevState: { error: string; success: boolean } | undefined,
    credentials: { email: string; password: string },
  ) {
    return authActions(prevState, credentials, "login");
  }

  static async signup(
    prevState: { error: string; success: boolean } | undefined,
    credentials: { email: string; password: string },
  ) {
    return authActions(prevState, credentials, "signup");
  }
}
