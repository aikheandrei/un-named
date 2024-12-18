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
        {/* <h2 className="w-full border border-b-2 py-6 text-center font-geistmono text-lg font-extrabold">
          Story
        </h2>
        <Description /> */}
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
              />
            );
          })}
      </div>
    </section>
  );
};

export default RoutePage;
