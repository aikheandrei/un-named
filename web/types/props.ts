export interface reviewProps {
  id?: number;
  review: string;
  rating: number;
  testimonial?: number;
  userId?: string;
  // for user review component
  img?: string;
  userName?: string;
  userEmail?: string;
  isAdmin?: boolean | false;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  emailVerified: string;
  image: string;
  admin: boolean;
}
