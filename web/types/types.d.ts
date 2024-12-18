import "next-auth";

declare module "next-auth" {
  interface User {
    admin?: boolean;
  }

  interface Session {
    user?: User;
  }
}
