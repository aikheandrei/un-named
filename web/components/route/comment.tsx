import { CommentProps } from "@/types/props";

export const Comment: React.FC<CommentProps> = ({
  img,
  userName,
  userId,
  content,
}) => {
  return (
    <div className="flex gap-2 border-t-2 px-8 py-4">
      <img
        className="size-12 rounded-full border-[3px]"
        src={img}
        alt="User Profile"
      />
      <div className="mt-[.05rem] font-geistsans">
        <a className="flex gap-2">
          <span className="font-semibold">{userName}</span>
          <span className="opacity-50">{userId}</span>
        </a>
        <p>{content}</p>
      </div>
    </div>
  );
};
