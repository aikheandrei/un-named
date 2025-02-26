import { AuthError } from "@supabase/supabase-js";

export const verifyOtp = async (
  prevState: { error?: string },
  data: { otp: string; email: string | null },
) => {
  try {
    const userCredentials = { otp: data.otp, email: data.email };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/verify-otp`,
      {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const responseData = await response.json();

    if (!response.ok) {
      return { error: prevState.error || responseData.error };
    }

    console.log(...responseData);
    return { ...responseData };
  } catch (error) {
    const errorMessage =
      error instanceof AuthError ? error.message : "Unknown error";

    throw new Error(errorMessage);
  }
};

const authApi = async (
  prevState: { error: string; success: boolean } | undefined,
  credentials: { email: string; password: string },
  authType: string,
) => {
  try {
    const userCredentials = {
      email: credentials.email,
      password: credentials.password,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${authType}`,
      {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

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

export default authApi;
