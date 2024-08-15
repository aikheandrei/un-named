"use client";

import { StarRating } from "@/components/ui/star-rating";
import { reviewProps } from "@/types/props";
import { useEffect, useState } from "react";

export const AverageRating = () => {
  const [reviewsData, setReviewsData] = useState<reviewProps[]>([]);

  const fetchReviews = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/reviews`,
    ).then((res) => res.json());

    setReviewsData(res);
  };

  const calcRatingAverage = () => {
    if (!reviewsData.length) return 0;

    let sum = 0;
    reviewsData.forEach((reviews) => {
      sum += reviews.rating ?? 0;
    });

    return Math.round((sum / reviewsData.length) * 10) / 10;
  };

  const ratingAverage = calcRatingAverage();

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      <div className="flex flex-row gap-[0.1rem] text-yellow-400">
        <StarRating rating={ratingAverage} size={20} />
      </div>
      <p className="font-geistsans text-sm">{ratingAverage}</p>
    </>
  );
};
