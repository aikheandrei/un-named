import { NextResponse } from "next/server";
import { database } from "@/db/index";
import { comments as commentSchema } from "@/db/schema";
import { eq } from "drizzle-orm";

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
    const { content } = await request.json();

    const data = await database.insert(commentSchema).values({
      content,
    });

    const comment = await database
      .select({ id: commentSchema.id, content: commentSchema.content })
      .from(commentSchema)
      .where(eq(commentSchema.id, data[0].insertId));

    console.log(comment);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error during HTTP POST request:", error);
    return handleError(error);
  }
}
