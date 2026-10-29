/**
 * Background music singleton. Starts on the first user interaction (browsers
 * block autoplay), can be toggled by the visitor, and is held (paused) while
 * the heartbeat is playing, then resumes automatically afterwards.
 */
type Listener = () => void;

const SRC = "/audio/background.mp3";

let audio: HTMLAudioElement | null = null;
let started = false;
let userEnabled = true;
let heartbeatHold = false;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((l) => l());
}

function sync() {
  if (!audio) return;
  if (started && userEnabled && !heartbeatHold) {
    void audio.play().catch(() => {
      /* blocked until next user gesture */
    });
  } else {
    audio.pause();
  }
  emit();
}

export const music = {
  /** Call from a user gesture. Safe to call many times. */
  start() {
    if (typeof window === "undefined" || started) return;
    audio = new Audio(SRC);
    audio.loop = true;
    audio.volume = 0.5;
    started = true;
    sync();
  },
  toggle() {
    if (!started) this.start();
    userEnabled = !userEnabled;
    sync();
  },
  holdForHeartbeat(hold: boolean) {
    heartbeatHold = hold;
    sync();
  },
  isOn() {
    return started && userEnabled && !heartbeatHold;
  },
  isUserEnabled() {
    return userEnabled;
  },
  subscribe(l: Listener) {
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  },
};
