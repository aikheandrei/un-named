import { Comment } from "@/components/router/comment";
import { CommentProps, UserProps } from "@/types/props";

export const runtime = "edge";

const RoutePage = async () => {
  const commentData: CommentProps[] = await fetch(
    `${process.env.WEBSITE_URL}/api/comments`,
  ).then((res) => res.json());

  const userData: UserProps[] = await fetch(
    `${process.env.WEBSITE_URL}/api/users`,
  ).then((res) => res.json());

  return (
    <section>
      <div className="mx-auto w-[40rem] border-x-2 pt-14">
        {commentData.map(({ id, content, userId }) => {
          const user = userData.find((user) => user.id === userId);

          return (
            <Comment
              key={id}
              img={user?.image}
              userName={user?.name}
              userId={user?.id}
              content={content}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RoutePage;
