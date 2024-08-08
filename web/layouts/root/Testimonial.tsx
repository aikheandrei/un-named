"use client";

import { UserReview } from "@/components/ui/user-review";
import { ReviewProps, UserProps } from "@/types/props";
import { useEffect, useState } from "react";

export default function Testimonial() {
  const [reviewsData, setReviewsData] = useState<ReviewProps[]>([]);
  const [usersData, setUsersData] = useState<UserProps[]>([]);

  const fetchReviews = async () => {
    const reviews = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/reviews`,
    ).then((res) => res.json());
    reviews ? setReviewsData(reviews) : [];
  };

  const fetchUsers = async () => {
    const users = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/users`,
    ).then((res) => res.json());
    users ? setUsersData(users) : [];
  };

  useEffect(() => {
    fetchReviews();
    fetchUsers();
  }, []);

  return (
    <section
      id="testimonial"
      className="inspect relative h-[100svh] flex-col text-white"
    >
      <img
        className="absolute -z-10 h-full w-full object-cover"
        src="/testimonial-bg.png"
        alt=""
      />
      <div className="absolute -top-24 z-10 flex h-full w-full flex-col items-center">
        <h1 className="font-newyear text-5xl tracking-widest drop-shadow-[0_5px_10px_rgba(0,0,0,0.80)]">
          "Testimonials"
        </h1>
      </div>
      <div className="absolute z-10 grid w-full grid-cols-3 grid-rows-3 gap-4 px-40">
        {reviewsData
          .filter(({ testimonial }) => testimonial)
          .map(({ id, userId, review, rating, testimonial }) => {
            const user = usersData.find((user) => user.id === userId);

            return (
              <UserReview
                key={id}
                id={id}
                img={user?.image}
                userName={user?.name}
                userEmail={user?.email}
                review={review}
                rating={rating}
                testimonial={testimonial}
                isRoot={true}
              />
            );
          })}
      </div>

      <div className="-z-20">
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 21%, rgba(0,0,0,0.9156394979866946) 34%, rgba(0,0,0,0.8568159685749299) 42%, rgba(0,0,0,0.7643789937850141) 51%, rgba(0,0,0,0.6831465007878151) 59%, rgba(0,0,0,0.5262837556897759) 71%, rgba(255,255,255,0) 92%)",
          }}
          className="-mt-[14rem] h-52 w-full opacity-[.9]"
        ></div>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,1) 21%, rgba(0,0,0,0.9156394979866946) 34%, rgba(0,0,0,0.8568159685749299) 42%, rgba(0,0,0,0.7643789937850141) 51%, rgba(0,0,0,0.6831465007878151) 59%, rgba(0,0,0,0.5262837556897759) 71%, rgba(255,255,255,0) 92%)",
          }}
          className="h-52 w-full opacity-[.95]"
        ></div>
      </div>

      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 21%, rgba(0,0,0,0.9156394979866946) 34%, rgba(0,0,0,0.8568159685749299) 42%, rgba(0,0,0,0.7643789937850141) 51%, rgba(0,0,0,0.6831465007878151) 59%, rgba(0,0,0,0.5262837556897759) 71%, rgba(255,255,255,0) 92%)",
        }}
        className="absolute -bottom-1 h-60 w-full opacity-[.9]"
      ></div>
    </section>
  );
}
