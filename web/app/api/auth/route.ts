import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function GET() {
<<<<<<< HEAD
<<<<<<< HEAD
  try {
    const session = await auth();

    console.log(session);
    return NextResponse.json(session);
=======
  const session = await auth();
  let res;

=======
>>>>>>> be02b5e (return user session instead of boolean in auth route for accessing user data)
  try {
    const session = await auth();

<<<<<<< HEAD
    console.log(res);
    return NextResponse.json(res);
>>>>>>> ce3aa59 (session check if auth + route handler for sessions)
=======
    console.log(session);
    return NextResponse.json(session);
>>>>>>> be02b5e (return user session instead of boolean in auth route for accessing user data)
  } catch (error) {
    NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
