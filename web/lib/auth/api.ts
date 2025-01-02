export class AuthApi {
  private static readonly API_URL = "http://localhost:3000/api/auth";

  static async login(
    prevState: { error?: string } | undefined,
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
        return { error: "Failed to login" };
      }

      console.log("hello world");
      return responseData;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("An unknown error occurred");
    }
  }
}
