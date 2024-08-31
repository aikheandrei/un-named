import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function GET() {
  try {
    const session = await auth();

    console.log(session);
    return NextResponse.json(session);
  } catch (error) {
    NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
