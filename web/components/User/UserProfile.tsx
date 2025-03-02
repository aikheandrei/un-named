"use client";

import useUser from "@/hooks/useUser";
import SignOut from "./SignOut";

const UserProfile = () => {
  const { data, isPending } = useUser();

  return (
    <>
      <h1>
        {isPending ? (
          <>
            Fetching User Email...
            <br />
            Fetching USer Id...
          </>
        ) : (
          <>
            {data?.email}
            <br />
            {data?.id}
          </>
        )}
      </h1>
      <SignOut />
    </>
  );
};

export default UserProfile;
