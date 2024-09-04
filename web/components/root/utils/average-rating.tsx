"use client";

import { reviewProps } from "@/types/props";
import { useEffect, useState } from "react";

import { IoMdStarOutline } from "react-icons/io";

export const AverageRating = () => {
  const [reviewsData, setReviewsData] = useState<reviewProps[]>([]);

  const fetchReviews = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/reviews`,
    ).then((res) => res.json());

    setReviewsData(res);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const calcRatingAverage = () => {
    if (!reviewsData.length) return 0;

    let sum = 0;
    reviewsData.forEach((reviews) => {
      sum += reviews.rating ?? 0;
    });

    return Math.round((sum / reviewsData.length) * 10) / 10;
  };

  const rating = calcRatingAverage();
  // console.log(rating);
  // console.log(
  //   rating >= 5
  //     ? "five"
  //     : rating >= 4
  //       ? "four"
  //       : rating >= 3
  //         ? "three"
  //         : rating >= 2
  //           ? "two"
  //           : rating >= 1 && "one",
  // );

  return (
    <>
      <div className="flex flex-row gap-[0.1rem]">
        {[...Array(5)].map((_, i) => {
          return <IoMdStarOutline key={i} size={20} />;
        })}
      </div>
      <p>{rating}</p>
      {reviewsData.length > 0 ? <p>{reviewsData[0].rating}</p> : <></>}
    </>
  );
};
