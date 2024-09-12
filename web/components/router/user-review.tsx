import { reviewProps } from "@/types/props";

export const UserReview: React.FC<reviewProps> = ({
  img,
  userName,
  userEmail,
  review,
  rating,
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
        <p className="mt-[.08rem] leading-5">{review}</p>
        <p className="mt-[.08rem] leading-5">{rating}</p>
      </div>
    </div>
  );
};
