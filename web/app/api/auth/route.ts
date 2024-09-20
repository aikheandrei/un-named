import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function GET() {
<<<<<<< HEAD
  try {
    const session = await auth();

    console.log(session);
    return NextResponse.json(session);
=======
  const session = await auth();
  let res;

  try {
    if (!session?.user) {
      res = { signedIn: false };
    } else {
      res = { signedIn: true };
    }

    console.log(res);
    return NextResponse.json(res);
>>>>>>> ce3aa59 (session check if auth + route handler for sessions)
  } catch (error) {
    NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
