export class AuthApi {
  private static readonly API_URL = "http://localhost:3000/api/auth";

  static async login(
    prevState: { error: string; success: boolean } | undefined,
    credentials: { email: string; password: string },
  ) {
    try {
      const userCredentials = {
        email: credentials.email,
        password: credentials.password,
      };

      const response = await fetch(`${AuthApi.API_URL}/login`, {
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
        error instanceof Error ? error.message : "Unknown error";
      throw new Error(errorMessage);
    }
  }
}
