import { AssetCarousel } from "@/components/landing/ui/asset-carousel";
import { AverageRating } from "@/components/root/utils/average-rating";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function AssetGallery() {
  return (
    <section
      id="about"
      className="inspect relative h-[120svh] flex-col text-white"
    >
      <img
        className="absolute -z-10 h-full w-full object-cover"
        src="/about-bg.png"
        alt=""
      />
      <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center">
        <h1 className="font-newyear mb-10 text-5xl tracking-widest drop-shadow-[0_5px_10px_rgba(0,0,0,0.80)]">
          Asset Gallery
        </h1>
        <AssetCarousel />
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
