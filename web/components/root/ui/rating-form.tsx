import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { Check } from "lucide-react";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

interface RatingFormProps {
  toggleModal: () => void;
}

export const RatingForm: React.FC<RatingFormProps> = ({ toggleModal }) => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState<{
    user: any;
    userId: string;
  } | null>(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [isSignedIn, setIsSignedIn] = useState<boolean>();

  const getSession = async () => {
    const session = await fetch(`/api/auth`).then((res) => res.json());
    setUserInfo(session);

    if (session) {
      setIsSignedIn(true);
    }
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <div
      // className="w-[40rem] rounded-md bg-card px-8 pb-10 pt-7 font-geistsans"
      className="w-[20rem] rounded-md bg-card px-8 pb-8 pt-7 font-geistsans"
      onClick={(e) => e.stopPropagation()}
    >
      <form
        className="text-sm"
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const review = formData.get("review") as string;

          if (isSignedIn) {
            await fetch(`/api/reviews`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                review,
                rating,
                userId: userInfo?.userId,
              }),
            });
            toggleModal?.();
          } else {
            alert("sign in first");
          }
          router.refresh();
        }}
      >
        <h2 className="font-geistsans text-2xl font-semibold">Rate us!</h2>
        <div className="mb-4 mt-2 flex justify-between">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={`cursor-pointer border-none bg-transparent`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <IoMdStar
                  className={`size-7 transition-colors ${
                    index <= (hover || rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  fill={index <= (hover || rating) ? "currentColor" : "gray"}
                />
              </button>
            );
          })}
        </div>
        <Textarea required rows={4} name="review" placeholder="write a review..." />
        <Button
          className="mt-4 flex w-full items-center gap-1 text-center"
          type="submit"
        >
          Submit
          <Check className="border-2 border-white/0" />
        </Button>
      </form>
    </div>
  );
};
