import { NextResponse } from "next/server";
import { database } from "@/db/index";
import { comments as commentSchema } from "@/db/schema";

const handleError = (error: unknown) => {
  NextResponse.json(
    { error: error instanceof Error ? error.message : "Unknown error" },
    { status: 500 },
  );
};

export async function GET() {
  try {
    const data = await database.select().from(commentSchema);

    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error during HTTP GET request:", error);
    return handleError(error);
  }
}

export async function POST(request: Request) {
  try {
    const data = await database.insert(commentSchema).values({});

    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error during HTTP POST request:", error);
    return handleError(error);
  }
}
