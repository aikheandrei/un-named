"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ReviewProps, UserProps } from "@/types/props";
import { UserReview } from "@/components/ui/user-review";

const characters = [
  {
    bg: "/TURN AROUND.png",
  },
  {
    bg: "/about-bg.png",
  },
  {
    bg: "/hero-bg.png",
  },
  {
    bg: "/story-bg.png",
  },
  {
    bg: "/testimonial-bg.png",
  },
];

export const TestimonialCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(1);

  const onPrevClick = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
      setCharIndex(charIndex - 1);
    }
  };

  const onNextClick = () => {
    if (carouselIndex < characters.length - 1) {
      setCarouselIndex(carouselIndex + 1);
      setCharIndex(charIndex + 1);
    }
  };

  const buttons = [
    {
      Icon: ChevronLeft,
      onclick: onPrevClick,
    },
    {
      Icon: ChevronRight,
      onclick: onNextClick,
    },
  ];

  const charNum = [1, 2, 3, 4, 5];

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
    <>
      <div className="relative flex flex-col items-center justify-center gap-4 md:gap-8">
        <button
          onClick={onPrevClick}
          className="absolute -left-20 z-10 hidden size-14 items-center justify-center rounded-md border-4 border-white bg-white text-black drop-shadow-md duration-300 hover:-translate-y-1 hover:bg-[#fa8237] hover:drop-shadow-2xl active:bg-[#445fba] md:flex"
        >
          <ChevronLeft className="md:size-[2rem]" />
        </button>
        <button
          onClick={onNextClick}
          className="absolute -right-20 z-10 hidden size-14 items-center justify-center rounded-md border-4 border-white bg-white text-black drop-shadow-md duration-300 hover:-translate-y-1 hover:bg-[#fa8237] hover:drop-shadow-2xl active:bg-[#445fba] md:flex"
        >
          <ChevronRight className="md:size-[2rem]" />
        </button>
        <div className="relative flex max-w-[100vw] items-center gap-6 overflow-hidden md:max-w-[30rem] lg:max-w-[50rem] lg:gap-14">
          <motion.div
            className="flex flex-nowrap"
            animate={{
              x: `calc(-${carouselIndex * 20}%)`,
            }}
          >
            {/* {reviewsData
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
              })} */}

            {reviewsData
              .filter(({ testimonial }) => testimonial)
              .map(({ id, userId, review, rating, testimonial }, index) => {
                const user = usersData.find((user) => user.id === userId);

                return (
                  <div
                    key={index}
                    className="flex w-[100vw] justify-center md:w-[30rem] lg:w-[50rem]"
                  >
                    <motion.div
                      className={`flex size-[15rem] w-[50rem] items-center justify-center overflow-hidden rounded-lg bg-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.50)]`}
                      animate={{
                        opacity: index === carouselIndex ? 1 : 0,
                      }}
                    >
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
                    </motion.div>
                  </div>
                );
              })}
          </motion.div>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex gap-2">
            {[...charNum].map((num, index) => {
              return (
                <div
                  key={index}
                  className={`${charIndex === num ? "bg-white/90" : "bg-white/40"} h-2 w-6 rounded-full`}
                />
              );
            })}
          </div>

          <div className="flex gap-4 md:hidden">
            {buttons.map((button, index) => {
              const Icon = button.Icon;

              return (
                <button
                  key={index}
                  onClick={button.onclick}
                  className="flex size-10 rounded-full border-4 border-white bg-[#445fba] p-1 drop-shadow-md duration-300 hover:-translate-y-1 hover:bg-[#fa8237] hover:drop-shadow-2xl active:bg-[#445fba]"
                >
                  <Icon />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
