import { reviewProps } from "@/types/props";
import { StarRating } from "../ui/star-rating";

const AdminUserReview: React.FC<reviewProps> = ({
  review,
  rating,
  testimonial,
  img,
  userName,
  userEmail,
}) => {
  return (
    <>
      <div></div>
    </>
  );
};

const UserReview: React.FC<reviewProps> = ({
  review,
  rating,
  testimonial,
  img,
  userName,
  userEmail,
  isAdmin,
}) => {
  return (
    <div className="flex gap-2 border-b-2 px-8 py-4">
      <img
        className="size-12 rounded-full border-[3px]"
        src={img}
        alt="User Profile"
      />
      <div className="mt-[.05rem] font-geistsans">
        <a className="flex gap-2">
          <span className="font-semibold">{userName}</span>
          <span className="text-neutral-500">{userEmail}</span>
        </a>
        <div className="-ml-[.2rem] mt-[.15rem] flex flex-row gap-[0.03rem] text-yellow-400">
          <StarRating rating={rating ?? 0} size={18} />
        </div>
        <p className="mt-[.1rem] leading-5">{review}</p>
      </div>
    </div>
  );
};

export { UserReview };
