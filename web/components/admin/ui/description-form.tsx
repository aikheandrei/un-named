import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { Check } from "lucide-react";

interface RatingFormProps {
  toggleModal: () => void;
  id?: number;
  setTitle?: string | "";
  setDescription?: string | "";
  request: string;
}

export const DescriptionForm: React.FC<
  RatingFormProps & { onDescriptionUpdate?: () => void }
> = ({
  toggleModal,
  id,
  setTitle,
  setDescription,
  request,
  onDescriptionUpdate,
}) => {
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

          if (request === "POST") {
            const response = await fetch(`/api/descriptions`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title,
                description,
              }),
            });

            if (response.ok) {
              onDescriptionUpdate?.();
            }
          } else if (request === "PUT") {
            await fetch(`/api/descriptions`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id,
                title,
                description,
              }),
            });
          }

          toggleModal?.();
          onDescriptionUpdate?.();
        }}
      >
        <Textarea
          className="my-4"
          name="title"
          defaultValue={setTitle}
          placeholder="write a title..."
        />
        <Textarea
          name="description"
          defaultValue={setDescription}
          placeholder="write a description..."
        />
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
