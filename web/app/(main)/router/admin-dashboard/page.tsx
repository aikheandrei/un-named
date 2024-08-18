"use client";

import { DescriptionModal } from "@/components/admin/description-modal";
import { Button } from "@/components/ui/button";
import { Description } from "@/components/ui/description";
import { UserReview } from "@/components/ui/user-review";
import { ReviewProps, UserProps } from "@/types/props";
import { useEffect, useState } from "react";

export const runtime = "edge";

const AdminDashboardPage = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setloading] = useState<boolean>(true);

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

  const checkUserSignIn = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/auth`,
      ).then((res) => res.json());

      if (res) {
        setUser(res.user);
      }
    } catch (error) {
      console.error("Failed to fetch user admin status", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    checkUserSignIn();
    fetchReviews();
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <section className="grid h-[100svh] items-center justify-center font-geistmono">
        <p>loading...</p>
      </section>
    );
  }

  return (
    <>
      {user?.admin ? (
        <>
          <section className="grid h-[100svh] items-center justify-center">
            <div className="mx-auto w-[40rem] border-x-2 pt-14">
              <DescriptionModal request="POST">
                New Description
              </DescriptionModal>

              <Description isAdmin={true} />
              {["Testimonials", "Reviews"].map((title, index) => (
                <div key={index}>
                  <h2 className="font-geistmono text-sm" key={index}>
                    {title}
                  </h2>
                  {reviewsData
                    .filter(({ testimonial }) =>
                      index === 0 ? testimonial : testimonial !== undefined,
                    )
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
                          isAdmin={true}
                        />
                      );
                    })}
                </div>
              ))}
            </div>
          </section>
          <div id="description-modal"></div>
        </>
      ) : (
        <section className="grid h-[100svh] items-center justify-center font-geistmono">
          <p className="text-sm">You're not an admin</p>
        </section>
      )}
    </>
  );
};

export default AdminDashboardPage;
