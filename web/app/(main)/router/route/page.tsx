import { Description } from "@/components/ui/description";
import { UserReview } from "@/components/ui/user-review";
import { ReviewProps, UserProps } from "@/types/props";

export const runtime = "edge";

const RoutePage = async () => {
  const reviewsData: ReviewProps[] = await fetch(
    `${process.env.WEBSITE_URL}/api/reviews`,
  ).then((res) => res.json());

  const usersData: UserProps[] = await fetch(
    `${process.env.WEBSITE_URL}/api/users`,
  ).then((res) => res.json());

  return (
    <section>
      <div className="mx-auto w-[40rem] border-x-2 pt-14">
        <Description />
        {["Testimonials", "Reviews"].map((title, index) => (
          <div key={index}>
            <h2 className="font-geistmono text-sm">{title}</h2>
            {reviewsData
              .filter(({ testimonial }) =>
                index === 0 ? testimonial : testimonial !== undefined,
              )
              .map(({ id, userId, review, rating }) => {
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
                  />
                );
              })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoutePage;
