"use client";

import { Button } from "@/components/ui/button";
import { Description } from "@/components/ui/description";
import { Input } from "@/components/ui/input";
import { UserReview } from "@/components/ui/user-review";
import { ReviewProps, UserProps } from "@/types/props";
import { Check, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// export const runtime = "edge";

const AdminDashboardPage = () => {
  const [reviewsData, setReviewsData] = useState<ReviewProps[]>([]);
  const [usersData, setUsersData] = useState<UserProps[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const fetchReviews = async () => {
    const reviews = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/reviews`,
    ).then((res) => res.json());
    if (reviews) {
      setReviewsData(reviews);
    }
  };

  const fetchUsers = async () => {
    const users = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/users`,
    ).then((res) => res.json());
    if (users) {
      setUsersData(users);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetchReviews();
      fetchUsers();
    }
  }, [isAdmin]);

  const handleRefreshReviews = () => {
    fetchReviews();
    fetchUsers();
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "jjx" && password === "12345") {
      setIsAdmin(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      {isAdmin ? (
        <>
          <section className="grid h-[100svh] items-center justify-center">
            <div className="mx-auto w-[40rem] border-x-2 pt-14">
              <h2 className="w-full border border-b-2 py-6 text-center font-geistmono text-lg font-extrabold">
                Story
              </h2>
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
          <div
            className="w-[40rem] rounded-md bg-card px-8 pb-10 pt-7 font-geistsans"
            onClick={(e) => e.stopPropagation()}
          >
            <form className="text-sm" onSubmit={handleLogin}>
              <h2 className="mb-2 font-geistsans text-2xl font-semibold">
                Login Admin
              </h2>
              <div className="mb-4 space-y-1">
                <p className="font-geistsans text-base">Username</p>
                <Input
                  className=""
                  name="username"
                  placeholder="Enter username..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2 space-y-1">
                <p className="font-geistsans text-base">Password</p>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="-mt-[.4rem] h-5 w-5" />
                  <AlertDescription className="-ml-[.2rem -mb-2">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <Button
                className="mt-6 flex w-full items-center gap-1 text-center"
                type="submit"
              >
                Login
                <Check className="border-2 border-white/0" />
              </Button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default AdminDashboardPage;
