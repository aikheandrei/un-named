import { Input } from "@/components/ui/input";
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
      className="w-[40rem] rounded-md bg-card px-8 pb-10 pt-7 font-geistsans"
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
        <div className="mb-4 space-y-1">
          <h2 className="font-geistsans text-2xl font-semibold">Title</h2>
          <Input
            className=""
            name="title"
            defaultValue={setTitle}
            placeholder="come up a title..."
            required
          />
        </div>

        <div className="mb-8 space-y-1">
          <h2 className="font-geistsans text-2xl font-semibold">Story</h2>
          <Textarea
            name="description"
            defaultValue={setDescription}
            placeholder="write a long story..."
            rows={8}
            required
          />
        </div>
        <Button
          className="flex w-full items-center gap-1 text-center"
          type="submit"
        >
          Submit Story
          <Check className="border-2 border-white/0" />
        </Button>
      </form>
    </div>
  );
};
