"use client";
import { ReviewProps } from "@/types/props";
import { StarRating } from "../ui/star-rating";
import { Button } from "./button";
import { useState } from "react";

const UserReview: React.FC<
  ReviewProps & { isRoot?: boolean; onTestimonialToggle?: () => void }
> = ({
  id,
  review,
  rating,
  testimonial,
  img,
  userName,
  userEmail,
  isAdmin,
  isRoot,
  onTestimonialToggle,
}) => {
  const [isTestimonial, setIsTestimonial] = useState(testimonial);

  const setTestimonial = async (newTestimonialStatus: boolean, id: number) => {
    const response = await fetch(`/api/reviews`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        testimonial: newTestimonialStatus,
        id,
      }),
    });

    if (response.ok) {
      setIsTestimonial(newTestimonialStatus);

      if (onTestimonialToggle) {
        onTestimonialToggle();
      }
    } else {
      console.error("Failed to update testimonial status");
    }
  };

  return (
    <>
      {isRoot ? (
        <div className="flex gap-2 rounded-lg bg-white px-6 py-4 text-black">
          <img
            className="size-12 rounded-full border-[1px]"
            src={img}
            alt="User Profile"
          />
          <div className="mt-[.05rem]">
            <span className="font-newyear text-lg font-semibold tracking-wide">
              {userName}{" "}
            </span>
            <span className="font-halimount text-xl tracking-wide opacity-60">
              {userEmail}
            </span>
            <div className="-ml-[.2rem] mt-[.15rem] flex flex-row gap-[0.03rem] text-yellow-400">
              <StarRating rating={rating ?? 0} size={20} />
            </div>
            <p className="mb-[1rem] mt-[.4rem] font-halimount text-xl leading-5 tracking-wide">
              {review}
            </p>
            {isAdmin && (
              <>
                {isTestimonial ? (
                  <p className="mb-[.4rem] mt-[.1rem] leading-5">true</p>
                ) : (
                  <p className="mb-[.4rem] mt-[.1rem] leading-5">false</p>
                )}
                {id !== undefined && (
                  <Button onClick={() => setTestimonial(!isTestimonial, id)}>
                    Testimonial
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="flex gap-2 border-b-2 px-8 py-4">
          <img
            className="size-12 rounded-full border-[3px]"
            src={img}
            alt="User Profile"
          />
          <div className="mt-[.05rem] font-geistsans text-sm">
            <a className="flex gap-2">
              <span className="font-semibold">{userName}</span>
              <span className="text-neutral-500">{userEmail}</span>
            </a>
            <div className="-ml-[.2rem] mt-[.15rem] flex flex-row gap-[0.03rem] text-yellow-400">
              <StarRating rating={rating ?? 0} size={18} />
            </div>
            <p className="mb-[.5rem] mt-[.1rem] leading-5">{review}</p>
            {isAdmin && (
              <>
                {id !== undefined && (
                  <Button
                    className="ml-auto"
                    onClick={() => setTestimonial(!isTestimonial, id)}
                  >
                    Toggle Testimonial
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export { UserReview };
