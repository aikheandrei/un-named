import Image from "next/image";

export const runtime = "edge";

const DrizzlePage = () => {
  return (
    <section className="grid h-[100svh] items-center justify-center">
      <div>
        <Image
          src="/d85d022bedcf129ebd23a2b21e97ef19.jpg"
          alt=""
          width={300}
          height={300}
          priority
        />
        <p className="mt-2 font-geistmono text-sm">(deserted)</p>
      </div>
    </section>
  );
};

export default DrizzlePage;
