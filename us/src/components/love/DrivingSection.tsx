import { useState } from "react";
import coupleDriving from "@/assets/characters/couple_driving.png";
import coupleTrophy from "@/assets/characters/couple_trophy.png";
import { launchConfetti } from "./confetti";
import { FloatingHearts } from "./decor";

const MESSAGE = [
  "Baby, listen to me for a second. ❤️",
  "I know your traffic rules exam is tomorrow, and maybe you're feeling nervous or overthinking a few things.",
  "But I need you to remember something:",
  "YOU'VE GOT THIS.",
  "You've been studying, practicing, and preparing for this. Tomorrow isn't about being perfect. It's about staying calm, reading every question carefully, and trusting yourself.",
  "Take your time. Read each question twice, look at every sign properly, and don't let nervousness make you forget everything you already know.",
  "And if you hesitate on one question, breathe and keep going. One mistake doesn't automatically mean everything is ruined.",
  "I believe in you, baby. Not just because I love you, but because I know you can do this.",
  "And tomorrow, whether you come back celebrating or feeling disappointed, you'll still have the same person cheering for you, loving you, and reminding you how amazing you are.",
];

const JOKE = [
  "BUT LET'S BE HONEST FOR A SECOND. 😭",
  "If a question asks who has priority, PLEASE DON'T GIVE PRIORITY TO YOUR NERVES.",
  "If the sign says 'stop,' my love… STOP. Not 'think about it dramatically for ten minutes.' 😭😭",
  "Road signs? CHECK. Priority rules? CHECK. Confidence? CHECK. Your ridiculously handsome boyfriend cheering for you from somewhere? ABSOLUTELY CHECK. 💋",
  "Tomorrow, answer like the queen you are. Calm hands, clear mind, and absolutely NO beef with the roundabouts.",
  "And remember: the exam is testing your knowledge of traffic rules, not your ability to survive without me. Although, let's be honest, that second test would be much harder. 🙄❤️",
  "GO GET THAT EXAM, BABY. I'M SO PROUD OF YOU ALREADY. 🥹💗",
];

export default function DrivingSection() {
  const [celebrated, setCelebrated] = useState(false);

  return (
    <section
      id="driving"
      className="relative overflow-hidden py-24"
      aria-labelledby="driving-title"
    >
      <FloatingHearts count={10} />
      <div className="relative mx-auto max-w-3xl px-4">
        <h2
          id="driving-title"
          className="text-center font-hand text-5xl font-bold text-primary sm:text-6xl"
        >
          OKAY, MISS TRAFFIC RULES CHAMPION. 🚦💗
        </h2>

        {/* road scene */}
        <div className="relative mt-12 overflow-hidden rounded-4xl border-4 border-border bg-secondary p-6 shadow-xl">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 w-24 -translate-x-1/2 rounded-full bg-card/60 heart-road"
          />
          {/* traffic light */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-4 z-10 flex flex-col gap-2 rounded-xl bg-foreground/80 p-2"
          >
            <span className="h-4 w-4 rounded-full bg-destructive opacity-70" />
            <span className="h-4 w-4 rounded-full bg-gold opacity-70" />
            <span className="anim-twinkle h-4 w-4 rounded-full bg-blush" />
          </div>
          {/* dashboard */}
          <div className="absolute right-4 top-4 z-10 rounded-2xl bg-card px-4 py-2 text-right shadow-md">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Shahd's confidence
            </p>
            <p className="font-hand text-2xl font-bold text-primary">100% 📈</p>
          </div>
          <img
            src={coupleDriving}
            alt="Cartoon Shahd driving a pastel-pink car while Saad cheers beside it holding a heart-doodle sign"
            width={1024}
            height={1568}
            loading="lazy"
            className="anim-car relative z-[5] mx-auto mt-8 h-96 w-auto"
          />
        </div>

        {/* message */}
        <div className="mt-12 space-y-4 rounded-4xl border border-border bg-card p-6 text-base leading-relaxed shadow-lg sm:p-10 sm:text-lg">
          {MESSAGE.map((p, i) => (
            <p
              key={i}
              className={p === "YOU'VE GOT THIS." ? "text-center font-hand text-4xl font-bold text-primary" : ""}
            >
              {p}
            </p>
          ))}
          <div className="mt-8 rounded-3xl bg-secondary p-6">
            {JOKE.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0 || i === 6
                    ? "mb-2 text-center font-hand text-3xl font-bold text-primary"
                    : "mb-2"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* celebration */}
        <div className="mt-12 rounded-4xl border border-border bg-card p-6 text-center shadow-lg sm:p-10">
          <img
            src={coupleTrophy}
            alt="Cartoon Shahd and Saad holding a golden trophy together with confetti falling"
            width={1024}
            height={1568}
            loading="lazy"
            className="anim-bob mx-auto h-72 w-auto"
          />
          <h3 className="mt-4 font-hand text-4xl font-bold text-primary sm:text-5xl">
            FUTURE TRAFFIC RULES QUEEN 🏆👑
          </h3>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Every sign, every priority rule, every roundabout: you know them
            all. The exam isn't ready for you, and honestly, neither is the
            examiner.
          </p>
          <button
            onClick={() => {
              launchConfetti();
              setCelebrated(true);
            }}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-ring"
          >
            I'M READY TO CRUSH THE EXAM 🚦💗
          </button>
          <p
            aria-live="polite"
            className="mt-6 font-hand text-3xl font-bold text-primary"
          >
            {celebrated ? "🎉 SHAHD KNOWS EVERY SIGN. THE EXAM SHOULD BE SCARED. 😭👑" : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
