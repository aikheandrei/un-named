import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { Check } from "lucide-react";
import { IoMdStarOutline } from "react-icons/io";

interface RatingFormProps {
  toggleModal: () => void;
}

export const DescriptionForm: React.FC<RatingFormProps> = ({ toggleModal }) => {
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
      className="rounded-md bg-card px-4 pb-6 pt-3 font-geistsans"
      onClick={(e) => e.stopPropagation()}
    >
      <form
        className="text-sm"
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const title = formData.get("title") as string;
          const description = formData.get("description") as string;

          if (isSignedIn) {
            await fetch(`/api/descriptions`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title,
                description,
              }),
            });
            toggleModal?.();
          } else {
            alert("sign in first");
          }
          router.refresh();
        }}
      >
        <Textarea
          className="my-4"
          name="title"
          placeholder="write a title..."
        />
        <Textarea name="description" placeholder="write a description..." />
        <Button
          className="mt-3 flex w-full items-center gap-1 text-center"
          type="submit"
        >
          Rate
          <Check className="border-2 border-white/0" />
        </Button>
      </form>
    </div>
  );
};
