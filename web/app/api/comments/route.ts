import { NextResponse } from "next/server";
import { database } from "@/db/index";
import { comments as commentSchema } from "@/db/schema";

export async function POST(request: Request) {
  try {
    await database.insert(commentSchema).values({});

    return NextResponse.json(
      { message: "Comment added successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error during POST request:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
