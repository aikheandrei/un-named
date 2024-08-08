import { Description } from "@/components/ui/description";

export default function Story() {
  return (
    <section
      id="story"
      className="inspect relative h-[150svh] flex-col text-white"
    >
      <img
        className="absolute -z-10 h-full w-full object-cover"
        src="/story-bg.png"
        alt=""
      />
      <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center px-[10rem] text-center">
        <Description isRoot={true} />
      </div>

      <div className="-z-20">
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 21%, rgba(0,0,0,0.9156394979866946) 34%, rgba(0,0,0,0.8568159685749299) 42%, rgba(0,0,0,0.7643789937850141) 51%, rgba(0,0,0,0.6831465007878151) 59%, rgba(0,0,0,0.5262837556897759) 71%, rgba(255,255,255,0) 92%)",
          }}
          className="-mt-[14rem] h-52 w-full opacity-[.9]"
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
