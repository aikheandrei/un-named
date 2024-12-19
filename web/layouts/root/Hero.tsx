import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] flex-col items-center justify-center text-white">
      <img
        className="absolute -z-10 h-full w-full object-cover"
        src="/hero-bg.png"
        alt=""
      />
      <h1 className="font-newyear text-7xl tracking-widest drop-shadow-[0_5px_10px_rgba(0,0,0,0.80)]">
        Jungle Jumper Extreme
      </h1>
      <p className="font-halimount mt-2 text-4xl tracking-wide drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
        "Leap, Swing, Survive, The jungle waits for no one!"
      </p>
      <a
        className={`${buttonVariants({ variant: "outline" })} font-halimount mt-4 rounded-md border-[3px] border-white px-5 py-6 text-4xl tracking-wide drop-shadow-[0px_5px_5px_rgba(0,0,0,0.90)]`}
        href="/jjx.exe"
        download
      >
        <p className="text-2xl">Play for Free (Download Game)</p>
      </a>

      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,1) 21%, rgba(0,0,0,0.9156394979866946) 34%, rgba(0,0,0,0.8568159685749299) 42%, rgba(0,0,0,0.7643789937850141) 51%, rgba(0,0,0,0.6831465007878151) 59%, rgba(0,0,0,0.5262837556897759) 71%, rgba(255,255,255,0) 92%)",
        }}
        className="absolute top-0 h-52 w-full opacity-[.60]"
      ></div>
    </section>
  );
}
