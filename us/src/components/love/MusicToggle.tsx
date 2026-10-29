import { useEffect, useState } from "react";
import { music } from "./music";

/** Floating music on/off button. Also starts the music on first interaction. */
export default function MusicToggle() {
  const [enabled, setEnabled] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const update = () => {
      setEnabled(music.isUserEnabled());
      setPlaying(music.isOn());
    };
    update();
    const unsub = music.subscribe(update);
    const first = () => music.start();
    window.addEventListener("pointerdown", first, { once: true });
    window.addEventListener("keydown", first, { once: true });
    return () => {
      unsub();
      window.removeEventListener("pointerdown", first);
      window.removeEventListener("keydown", first);
    };
  }, []);

  return (
    <button
      onClick={() => music.toggle()}
      aria-pressed={enabled}
      aria-label={enabled ? "Turn the music off" : "Turn the music on"}
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-2xl shadow-lg transition-transform hover:scale-110 focus-visible:ring-4 focus-visible:ring-ring"
    >
      <span aria-hidden="true" className={playing ? "anim-bob" : ""}>
        {enabled ? "🎵" : "🔇"}
      </span>
    </button>
  );
}
