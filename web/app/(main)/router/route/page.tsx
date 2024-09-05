import { UserReview } from "@/components/router/user-review";
import { reviewProps, UserProps } from "@/types/props";

export const runtime = "edge";

const RoutePage = async () => {
  const reviewsData: reviewProps[] = await fetch(
    `${process.env.WEBSITE_URL}/api/reviews`,
  ).then((res) => res.json());

  const usersData: UserProps[] = await fetch(
    `${process.env.WEBSITE_URL}/api/users`,
  ).then((res) => res.json());

  return (
    <section>
      <div className="mx-auto w-[40rem] border-x-2 pt-14">
        {reviewsData.map(({ id, userId, review, rating }) => {
          const user = usersData.find((user) => user.id === userId);

          return (
            <UserReview
              key={id}
              img={user?.image}
              userName={user?.name}
              userEmail={user?.email}
              review={review}
              rating={rating}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RoutePage;
