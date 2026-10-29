import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import WelcomeScreen from "@/components/love/WelcomeScreen";
import DrivingSection from "@/components/love/DrivingSection";
import NightSection from "@/components/love/NightSection";
import AnnouncementSection from "@/components/love/AnnouncementSection";
import NotesSection from "@/components/love/NotesSection";
import FinaleSection from "@/components/love/FinaleSection";
import MusicToggle from "@/components/love/MusicToggle";
import coupleSleepy from "@/assets/characters/couple_sleepy.png";
import coupleWakeup from "@/assets/characters/couple_wakeup.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "For Shahd 💌 A Little Universe of Love",
      },
      {
        name: "description",
        content:
          "A romantic little universe made just for Shahd — one giant apology, encouragement for tomorrow's traffic rules exam, our favorite night, official appreciation, love notes, and one very clingy boyfriend.",
      },
      {
        property: "og:title",
        content: "For Shahd 💌 A Little Universe of Love",
      },
      {
        property: "og:description",
        content:
          "One giant apology, traffic-rules-exam hype, our favorite night, and six little love notes — all for Shahd.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [runId, setRunId] = useState(0);
  const [welcomeOpen, setWelcomeOpen] = useState(true);

  const restart = () => {
    setRunId((r) => r + 1);
    setWelcomeOpen(true);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {welcomeOpen && (
        <WelcomeScreen key={runId} onFinish={() => setWelcomeOpen(false)} />
      )}

      <MusicToggle />

      <main className="relative">
        {/* Section 1 — the apology, resting place */}
        <section
          id="sorry"
          className="relative overflow-hidden py-24"
          aria-labelledby="sorry-title"
        >
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2
              id="sorry-title"
              className="font-hand text-5xl font-bold text-primary sm:text-6xl"
            >
              ONE GIRL. 100 MESSAGES. 😭❤️
            </h2>
            <p className="mt-3 font-hand text-2xl text-muted-foreground">
              one extremely unresponsive boyfriend. an apology he'll spend a
              lifetime making up for.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <img
                src={coupleSleepy}
                alt="Cartoon Saad asleep hugging a pink pillow while Shahd looks at her phone with loving annoyance"
                width={1024}
                height={1568}
                loading="lazy"
                className="anim-bob h-72 w-auto"
              />
              <img
                src={coupleWakeup}
                alt="Cartoon Saad just woken up, blushing, holding his phone while Shahd looks at him smugly"
                width={1024}
                height={1568}
                loading="lazy"
                className="anim-bob h-72 w-auto"
                style={{ animationDelay: "1.2s" }}
              />
            </div>
            <p className="mt-10 text-base leading-relaxed text-muted-foreground">
              Babyyyyy, if you're reading this, it means you forgave me — or at
              least you're considering it, which is honestly more than I
              deserve. Scroll down, my love. I made all of this for you. ❤️
            </p>
          </div>
        </section>

        <DrivingSection />
        <NightSection />
        <AnnouncementSection />
        <NotesSection />
        <FinaleSection onRestart={restart} />
      </main>
    </div>
  );
}
