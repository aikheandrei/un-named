import { SignIn } from "@/components/router/sign-in";

// export const runtime = "edge";

const OverviewPage = () => {
  return (
    <section className="grid h-[100svh] items-center justify-center">
      <SignIn />
    </section>
  );
};

export default OverviewPage;
