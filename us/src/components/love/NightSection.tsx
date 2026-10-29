import { useEffect, useRef, useState } from "react";
import coupleNightSitting from "@/assets/characters/couple_night_sitting.png";
import coupleHugNight from "@/assets/characters/couple_hug_night.png";
import { Heartbeat } from "./heartbeat";
import { music } from "./music";
import { FloatingHearts, TwinkleStars } from "./decor";

const MESSAGE = [
  "Baby…",
  "I've been thinking about that night a lot lately.",
  "The night where it was just us. No phones demanding attention, no world rushing past, no noise. Just your hand in mine, your head against my chest, and the kind of quiet that only exists when I'm with you.",
  "I remember the way the city looked from up there. I remember pretending I was calm, while my heart was doing jumping jacks. I remember thinking, 'THIS. This is the moment I want to keep forever.'",
  "And then you looked at me.",
  "And suddenly every plan I had, every word I rehearsed, every thought in my head just… disappeared. Because your eyes have this way of making me forget my own name.",
  "I don't think I'll ever forget that night. The way you felt. The way you smelled. The way the world went completely silent the moment you leaned into me.",
  "That night wasn't just special.",
  "That night was the moment I knew.",
  "Knew that no matter where life takes us, no matter how far apart we are, no matter how many nights we spend in different beds, in different cities, under different stars —",
  "my heart will always be right there with you.",
  "I love you more than you'll ever fully understand, baby.",
  "And one day, when the distance finally gives up and lets us be together again, I promise you:",
  "I'm going to hold you so close, you'll feel my heartbeat in your soul.",
  "Until then, close your eyes, and imagine my arms around you.",
  "Because they are. They always are. ❤️",
];

export default function NightSection() {
  const [hugged, setHugged] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const hb = useRef<Heartbeat | null>(null);

  useEffect(() => {
    return () => {
      hb.current?.stop();
      hb.current = null;
      music.holdForHeartbeat(false);
    };
  }, []);

  const toggleSound = () => {
    if (soundOn) {
      hb.current?.stop();
      hb.current = null;
      music.holdForHeartbeat(false);
      setSoundOn(false);
    } else {
      music.holdForHeartbeat(true);
      if (!hb.current) hb.current = new Heartbeat();
      hb.current.start();
      setSoundOn(true);
    }
  };

  return (
    <section
      id="night"
      className="night-theme relative overflow-hidden py-24"
      aria-labelledby="night-title"
    >
      <TwinkleStars count={30} />
      {/* moon */}
      <div
        aria-hidden="true"
        className="anim-glow absolute right-10 top-10 h-20 w-20 rounded-full bg-gold sm:h-28 sm:w-28"
        style={{ boxShadow: "0 0 60px 20px oklch(0.85 0.13 85 / 0.35)" }}
      />
      <div className="relative mx-auto max-w-3xl px-4">
        <h2
          id="night-title"
          className="text-center font-hand text-5xl font-bold text-primary sm:text-6xl"
        >
          About that night… 🌙
        </h2>
        <p className="mt-3 text-center font-hand text-2xl text-muted-foreground">
          the one where the whole world went quiet.
        </p>

        {/* the two of them, apart then holding each other */}
        <div className="relative mt-12 h-[26rem] overflow-hidden rounded-4xl border-4 border-border shadow-2xl sm:h-[30rem]">
          <img
            src={coupleNightSitting}
            alt="Cartoon Shahd and Saad sitting close on a blanket under a crescent moon and stars, her head resting on his shoulder"
            width={1024}
            height={1568}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${hugged ? "opacity-0" : "opacity-100"}`}
          />
          <img
            src={coupleHugNight}
            alt="Cartoon Shahd and Saad in a tight embrace under a starry sky with hearts floating around them"
            width={1024}
            height={1568}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${hugged ? "opacity-100" : "opacity-0"}`}
          />
          {hugged && <FloatingHearts count={14} />}
        </div>

        {/* letter */}
        <div className="mt-12 space-y-4 rounded-4xl border border-border bg-card p-6 text-base leading-relaxed shadow-lg sm:p-10 sm:text-lg">
          {MESSAGE.map((p, i) => (
            <p
              key={i}
              className={
                i === 8 || i === 13
                  ? "text-center font-hand text-3xl font-bold text-primary"
                  : ""
              }
            >
              {p}
            </p>
          ))}
        </div>

        {/* hug button + heartbeat toggle */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <button
            onClick={() => setHugged(true)}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-ring"
          >
            Hold me again, please. 🥺
          </button>
          {hugged && (
            <p
              aria-live="polite"
              className="anim-pop-in text-center font-hand text-2xl font-semibold text-primary"
            >
              Imagine me pulling you close, feeling you relax against my chest,
              and whispering 'I'm not letting go tonight.' 🫂❤️
            </p>
          )}
          <button
            onClick={toggleSound}
            aria-pressed={soundOn}
            className="inline-flex items-center gap-3 rounded-full border border-border bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-accent focus-visible:ring-4 focus-visible:ring-ring"
          >
            <span
              aria-hidden="true"
              className={`${soundOn ? "anim-heartbeat-fast" : "anim-heartbeat"} text-2xl`}
            >
              🫀
            </span>
            {soundOn ? "My heartbeat: ON (turn it off, music comes back)" : "Hear my heartbeat 😳"}
          </button>
        </div>
      </div>
    </section>
  );
}
