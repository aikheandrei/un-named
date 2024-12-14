import { NextResponse } from "next/server";
import { database } from "@/db/index";
import { users as usersSchema } from "@/db/schema";

const handleError = (error: unknown) => {
  NextResponse.json(
    { error: error instanceof Error ? error.message : "Unknown error" },
    { status: 500 },
  );
};

export async function GET() {
  try {
    const users = await database.select().from(usersSchema);

    // console.log(users);
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error during HTTP GET request:", error);
    return handleError(error);
  }
}
