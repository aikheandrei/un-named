import { AuthError } from "@supabase/supabase-js";

export const authActions = async (
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
    const errorMessage =
      error instanceof AuthError ? error.message : "Unknown error";

    throw new Error(errorMessage);
  }
};
