export class AuthApi {
  private static readonly API_URL = "http://localhost:3000/api/auth";

  static async login(
    prevState: { error?: string },
    data: { email: string; password: string },
  ) {
    try {
      const userData = {
        email: data.email,
        password: data.password,
      };

      const response = await fetch(`${this.API_URL}/login`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        return { error: prevState.error ?? "Failed to login" };
      }

      return responseData;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("An unknown error occurred");
    }
  }
}
