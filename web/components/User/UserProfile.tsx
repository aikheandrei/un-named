import useUser from "@/hooks/useUser";
import SignOut from "./SignOut";

const UserProfile = () => {
  const { user } = useUser();

  return (
    <>
      <h1>{user?.email}</h1>
      <h1>{user?.id}</h1>
      <SignOut />
    </>
  );
};

export default UserProfile;
