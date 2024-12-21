import { AverageRating } from "@/components/root/utils/average-rating";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="inspect relative h-[120svh] flex-col text-white"
    >
      <img
        className="absolute -z-10 h-full w-full object-cover"
        src="/asset-gallery-bg.png"
        alt=""
      />
      <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center">
        <div className="z-[8] flex w-full items-center justify-center gap-14 text-white lg:flex-row">
          <div className="flex w-[40ch] flex-col gap-2">
            <h1 className="font-newyear text-5xl tracking-widest drop-shadow-[0_5px_10px_rgba(0,0,0,0.80)]">
              EMBARK ON THE WILDEST JUNGLE QUEST
            </h1>
            <p className="mt-2 font-halimount text-2xl tracking-[.05rem] drop-shadow-[0_5px_10px_rgba(0,0,0,0.50)]">
              Every day, countless players worldwide leap into action in Jungle
              Jumper Extreme. Master the art of timing, agility, and survival as
              you navigate treacherous terrain, and conquer wild obstacles.
            </p>

            <AverageRating isRoot={true} />
            <Link
              className={`${buttonVariants({ variant: "outline" })} w-[12.5rem] rounded-md border-[3px] border-white py-5 font-halimount tracking-wide drop-shadow-[0px_5px_5px_rgba(0,0,0,0.90)]`}
              href="/route"
            >
              <p className="text-xl">SEE OTHER'S EXPERIENCE</p>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative h-[12.5rem] w-[23rem] overflow-hidden rounded-xl border-4 border-white bg-white/40 drop-shadow-lg md:h-[20rem] md:w-[40rem] lg:h-[30rem] lg:w-[50rem] lg:border-[6px]">
              <video
                className="h-full w-full object-cover"
                src="gameplay.mp4"
                loop
                autoPlay
                muted
              ></video>
              {/* <img
                className="absolute h-full w-full object-cover"
                src="/images/gameplay/gameplay.png"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="-z-20">
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 21%, rgba(0,0,0,0.9156394979866946) 34%, rgba(0,0,0,0.8568159685749299) 42%, rgba(0,0,0,0.7643789937850141) 51%, rgba(0,0,0,0.6831465007878151) 59%, rgba(0,0,0,0.5262837556897759) 71%, rgba(255,255,255,0) 92%)",
          }}
          className="-mt-[12rem] h-52 w-full opacity-[.95]"
        ></div>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,1) 21%, rgba(0,0,0,0.9156394979866946) 34%, rgba(0,0,0,0.8568159685749299) 42%, rgba(0,0,0,0.7643789937850141) 51%, rgba(0,0,0,0.6831465007878151) 59%, rgba(0,0,0,0.5262837556897759) 71%, rgba(255,255,255,0) 92%)",
          }}
          className="h-52 w-full opacity-[.95]"
        ></div>
      </div>
    </section>
  );
}
