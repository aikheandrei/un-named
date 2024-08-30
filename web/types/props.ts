export interface reviewProps {
  img?: string;
  id?: number;
  userName?: string;
  userId?: string;
  userEmail?: string;
  review?: string;
  rating?: number;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  emailVerified: string;
  image: string;
  admin: boolean;
}
