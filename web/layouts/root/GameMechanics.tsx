import { AssetCarousel } from "@/components/landing/ui/asset-carousel";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const GameMechanics = () => {
  return (
    <>
      <section
        id="asset-gallery"
        className="inspect relative h-[120svh] flex-col text-white"
      >
        <img
          className="absolute -z-10 h-full w-full object-cover"
          src="/game-mechanics.png"
        />
        <div className="absolute z-[4] flex h-full w-full flex-col items-center justify-center gap-10 text-white md:flex-row-reverse md:gap-14 lg:gap-32">
          <div>
            <div className="-mb-4 h-[12.5rem] w-[22rem] rotate-6 overflow-hidden rounded-xl border-4 border-white bg-white/40 drop-shadow-lg lg:-mb-12 lg:h-[25rem] lg:w-[40rem]">
              <img
                className="absolute h-full w-full object-cover"
                src="/images/arena/placeholder1.PNG"
                alt=""
              />
            </div>
            <div className="right-12 -mb-4 ml-20 h-[7.5rem] w-[13rem] -rotate-6 overflow-hidden rounded-xl border-4 border-white bg-white/40 drop-shadow-lg lg:-mb-[13rem] lg:ml-[22rem] lg:h-[12.5rem] lg:w-[22rem]">
              <img
                className="absolute h-full w-full object-cover"
                src="/images/arena/placeholder2.PNG"
                alt=""
              />
            </div>
            <div className="relative -z-[1] ml-12 h-[6rem] w-[10rem] rotate-[16deg] overflow-hidden rounded-xl border-4 border-white bg-white/40 drop-shadow-lg lg:-ml-[6rem] lg:h-[9rem] lg:w-[15rem] lg:rotate-[2deg]">
              <img
                className="absolute h-full w-full object-cover"
                src="/images/arena/placeholder3.PNG"
                alt=""
              />
            </div>
          </div>
          <div className="flex w-[25rem] flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="font-newyear text-5xl tracking-widest drop-shadow-[0_5px_10px_rgba(0,0,0,0.80)]">
                GAME MECHANICS
              </h1>
              <p className="mt-2 font-halimount text-2xl tracking-[.05rem] drop-shadow-[0_5px_10px_rgba(0,0,0,0.50)]">
                Its simple! JUMP, SWING, and DODGE enemies as you navigate
                through the jungle to reach the highest score!.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center">
          <h1 className="mb-10 font-newyear text-5xl tracking-widest drop-shadow-[0_5px_10px_rgba(0,0,0,0.80)]">
            Asset Gallery
          </h1>
          <AssetCarousel />
        </div> */}

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
    </>
  );
};
