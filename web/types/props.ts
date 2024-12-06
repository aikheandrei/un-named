export interface CommentProps {
  img?: string;
  id?: number;
  userName?: string;
  userId?: string;
  userEmail?: string;
  content?: string;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  image: string;
}
