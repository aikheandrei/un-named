"use client";

import { Description } from "@/components/ui/description";
import { UserReview } from "@/components/ui/user-review";
import { ReviewProps, UserProps } from "@/types/props";
import { useEffect, useState } from "react";

export const runtime = "edge";

const AdminDashboardPage = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
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
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserSignIn();
    fetchReviews();
    fetchUsers();
  }, []);

  const handleRefreshReviews = () => {
    fetchReviews();
    fetchUsers();
  };

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
              <Description isAdmin={true} />
              <h2 className="w-full border border-b-2 py-6 text-center font-geistmono text-lg font-extrabold">
                Testimonials
              </h2>
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
                      isAdmin={true}
                      onTestimonialToggle={handleRefreshReviews}
                    />
                  );
                })}

              <h2 className="w-full border border-b-2 py-6 text-center font-geistmono text-lg font-extrabold">
                Reviews
              </h2>
              {reviewsData
                .filter(({ testimonial }) => !testimonial)
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
                      onTestimonialToggle={handleRefreshReviews}
                    />
                  );
                })}
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
