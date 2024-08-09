import { AverageRating } from "@/components/root/utils/average-rating";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="h-[100svh]">
      <h2>EMBARK ON THE WILDEST JUNGLE QUEST</h2>
      <p>
        Every day, countless players worldwide leap into action in Jungle Jumper
        Extreme. Master the art of timing, agility, and survival as you navigate
        treacherous terrain, conquer wild obstacles, and race to the top of the
        leaderboard. With endless challenges and thrilling gameplay, there's
        always a new way to jump higher, swing faster, and outlast the jungle.
        It's free to play and always will be – start your jungle journey now!
      </p>
      <AverageRating />
      <Button>SEE OTHER'S EXPERIENCE</Button>
    </section>
  );
}
