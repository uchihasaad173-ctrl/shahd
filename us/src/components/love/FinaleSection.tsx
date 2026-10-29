import { useState } from "react";
import coupleGoodnight from "@/assets/characters/couple_goodnight.png";
import coupleHugNight from "@/assets/characters/couple_hug_night.png";
import coupleTrophy from "@/assets/characters/couple_trophy.png";
import { launchConfetti } from "./confetti";
import { TwinkleStars } from "./decor";

const MESSAGE = [
  "If you made it all the way here, then you just experienced everything I feel for you.",
  "The sorry. The pride. The longing. The laughs. The hugs. The love.",
  "Shahd, my love, my whole heart, my favorite person in every universe:",
  "You are the best thing that has ever happened to me.",
  "You make ordinary days feel like celebrations. You make distance feel bearable. You make ME feel like the luckiest man alive, because honestly, I am.",
  "I know tomorrow is a big day. But I need you to walk into that exam knowing one thing:",
  "No matter what happens, you are already my champion.",
  "And no matter where you go, how far you drive, or how long the road is —",
  "my heart will be in the passenger seat the entire way.",
  "I love you, baby.",
  "Today. Tomorrow. Every day after that. In every life, in every universe, I'd find you and choose you. Every single time.",
  "Now go ace that exam, my love.",
  "And then come back and let me celebrate you properly. ❤️",
];

type Response = "love" | "pass" | "hug" | null;

export default function FinaleSection({ onRestart }: { onRestart: () => void }) {
  const [response, setResponse] = useState<Response>(null);

  return (
    <section
      id="finale"
      className="finale-theme relative overflow-hidden py-24"
      aria-labelledby="finale-title"
    >
      <TwinkleStars count={40} />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <div
          aria-hidden="true"
          className="anim-glow anim-heartbeat mx-auto text-8xl"
          style={{ filter: undefined }}
        >
          ❤️
        </div>
        <h2
          id="finale-title"
          className="mt-6 font-hand text-5xl font-bold text-primary sm:text-6xl"
        >
          One last thing, my love…
        </h2>

        <div className="mt-10 space-y-4 rounded-4xl border border-border bg-card p-6 text-left text-base leading-relaxed shadow-lg sm:p-10 sm:text-lg">
          {MESSAGE.map((p, i) => (
            <p
              key={i}
              className={
                i === 2 || i === 9
                  ? "text-center font-hand text-3xl font-bold text-primary"
                  : ""
              }
            >
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setResponse("love")}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-ring"
          >
            I LOVE YOU TOO ❤️
          </button>
          <button
            onClick={() => {
              launchConfetti();
              setResponse("pass");
            }}
            className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-4 font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-ring"
          >
            I'M GOING TO PASS TOMORROW 🚦👑
          </button>
          <button
            onClick={() => setResponse("hug")}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-4 font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-ring"
          >
            I NEED A HUG RIGHT NOW 🥺
          </button>
        </div>

        <div aria-live="polite" className="mt-10">
          {response === "love" && (
            <div className="anim-pop-in rounded-4xl border border-border bg-card p-8 shadow-lg">
              <div
                aria-hidden="true"
                className="anim-heartbeat text-[8rem] leading-none"
              >
                ❤️
              </div>
              <p className="mt-4 font-hand text-3xl font-bold text-primary">
                MISSION ACCOMPLISHED. 💘
              </p>
              <p className="mt-2 text-lg">
                Somewhere out there, a very happy boyfriend just smiled at his
                phone like an idiot. This is us. Forever. No take-backs.
              </p>
            </div>
          )}
          {response === "pass" && (
            <div className="anim-pop-in rounded-4xl border border-border bg-card p-8 shadow-lg">
              <img
                src={coupleTrophy}
                alt="Cartoon Shahd and Saad holding a golden trophy together with confetti falling"
                width={1024}
                height={1568}
                loading="lazy"
                className="anim-bob mx-auto h-56 w-auto"
              />
              <p className="mt-4 font-hand text-3xl font-bold text-primary">
                THAT'S MY QUEEN. 👑🏆
              </p>
              <p className="mt-2 text-lg">
                Tomorrow, the traffic rules exam. Next week, the world. And I'll be right
                here, screaming your name, forever your biggest fan.
              </p>
            </div>
          )}
          {response === "hug" && (
            <div className="anim-pop-in rounded-4xl border border-border bg-card p-8 shadow-lg">
              <img
                src={coupleHugNight}
                alt="Cartoon Shahd and Saad in a tight embrace under a starry sky with hearts floating"
                width={1024}
                height={1568}
                loading="lazy"
                className="mx-auto h-56 w-auto rounded-3xl"
              />
              <p className="mt-4 font-hand text-3xl font-bold text-primary">
                🫂 DIGITAL HUG: DELIVERED.
              </p>
              <p className="mt-2 text-lg">
                Close your eyes. Feel it? That's me. Holding you. Not letting
                go. Until I can do it for real — this hug is on standby, 24/7.
              </p>
            </div>
          )}
        </div>

        <button
          onClick={onRestart}
          className="mt-10 inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:ring-4 focus-visible:ring-ring"
        >
          Take me back to the beginning 💌
        </button>

        <footer className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
          <p className="font-hand text-2xl text-primary">
            Made with love, missed calls, and exactly one sleeping idiot.
          </p>
          <p className="mt-2">For Shahd. Always. ❤️</p>
        </footer>
      </div>
    </section>
  );
}
