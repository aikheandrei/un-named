import { NextResponse } from "next/server";
import { database } from "@/db/index";
import { reviews as reviewSchema } from "@/db/schema";
import { eq } from "drizzle-orm";

const handleError = (error: unknown) => {
  NextResponse.json(
    { error: error instanceof Error ? error.message : "Unknown error" },
    { status: 500 },
  );
};

export async function GET() {
  try {
    const data = await database.select().from(reviewSchema);

    // console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error during HTTP GET request:", error);
    return handleError(error);
  }
}

export async function POST(request: Request) {
  try {
    const { review, rating, userId } = await request.json();

    const data = await database.insert(reviewSchema).values({
      review,
      rating,
      userId,
    });

    const currentReview = await database
      .select({ id: reviewSchema.id, review: reviewSchema.review })
      .from(reviewSchema)
      .where(eq(reviewSchema.id, data[0].insertId));

    // console.log(currentReview);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error during HTTP POST request:", error);
    return handleError(error);
  }
}

export async function PUT(request: Request) {
  try {
    const { testimonial, id } = await request.json();

    const data = await database
      .update(reviewSchema)
      .set({
        testimonial,
      })
      .where(eq(reviewSchema.id, id));

    // console.log(currentReview);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error during HTTP POST request:", error);
    return handleError(error);
  }
}
