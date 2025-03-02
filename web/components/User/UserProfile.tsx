"use client";

import useUser from "@/hooks/useUser";
import SignOut from "./SignOut";

const UserProfile = () => {
  const { data } = useUser();

  return (
    <>
      <h1>{data?.email}</h1>
      <h1>{data?.id}</h1>
      <SignOut />
    </>
  );
};

export default UserProfile;
