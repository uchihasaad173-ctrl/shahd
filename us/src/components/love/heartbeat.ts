/** Ridiculously fast synthesized heartbeat (~215 bpm, love-struck edition). */
const BEAT_MS = 280;

export class Heartbeat {
  private ctx: AudioContext | null = null;
  private timer: number | null = null;

  start() {
    if (this.ctx) return;
    const Ctx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    const beat = () => {
      if (this.ctx) this.thump(0.9);
    };
    beat();
    this.timer = window.setInterval(beat, BEAT_MS);
  }

  stop() {
    if (this.timer !== null) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
    if (this.ctx) {
      void this.ctx.close();
      this.ctx = null;
    }
  }

  private thump(volume: number) {
    const ctx = this.ctx;
    if (!ctx) return;
    const play = (delay: number, gainValue: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(70, ctx.currentTime + delay);
      osc.frequency.exponentialRampToValueAtTime(
        40,
        ctx.currentTime + delay + 0.07,
      );
      gain.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(
        gainValue,
        ctx.currentTime + delay + 0.01,
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        ctx.currentTime + delay + 0.09,
      );
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.11);
    };
    play(0, volume);
    play(0.1, volume * 0.6);
  }
}
