import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function GET() {
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
  } catch (error) {
    NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
