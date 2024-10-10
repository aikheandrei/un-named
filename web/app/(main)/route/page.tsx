"use client";

export const runtime = "edge";

const DrizzlePage = () => {
  return (
    <section className="grid h-[100svh] items-center justify-center">
      <div>
        <form
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            await fetch("/api/comments", {
              method: "POST",
            });
          }}
        >
          <input name="comment" type="text" placeholder="comment" />
          <button type="submit">comment</button>
        </form>
      </div>
    </section>
  );
};

export default DrizzlePage;
