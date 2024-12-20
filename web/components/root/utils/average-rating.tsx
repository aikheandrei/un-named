"use client";

import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { ReviewProps } from "@/types/props";
import { useEffect, useState } from "react";

export const AverageRating: React.FC<{ isRoot?: boolean }> = ({ isRoot }) => {
  const [reviewsData, setReviewsData] = useState<ReviewProps[]>([]);

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
      {isRoot ? (
        <div className="mt-2 flex flex-row gap-[0.4rem] text-yellow-400 drop-shadow-[0px_5px_5px_rgba(0,0,0,0.90)]">
          <StarRating rating={ratingAverage} size={30} />
        </div>
      ) : (
        <>
          <Button
            variant={"outline"}
            className="flex h-14 w-28 flex-col font-geistsans"
          >
            <div className="flex flex-row gap-[0.1rem] text-yellow-400">
              <StarRating rating={ratingAverage} size={20} />
            </div>
            <p className="-mt-1 font-geistsans text-sm">{ratingAverage}</p>
          </Button>
        </>
      )}
    </>
  );
};
