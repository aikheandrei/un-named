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
        console.log(responseData.error);
        return { error: responseData.error, success: prevState?.success };
      }

      // console.log(responseData.error);
      return { success: true, ...responseData };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("An unknown error occurred");
    }
  }
}
