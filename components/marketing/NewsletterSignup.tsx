import { Mail } from "lucide-react";

export function NewsletterSignup() {
  return (
    <form className="rounded-[8px] border border-border bg-panel/75 p-5 shadow-[var(--shadow)]" aria-label="Email signup">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-accent/18 p-2 text-accent">
          <Mail className="h-5 w-5" />
        </span>
        <div>
          <h2 className="font-display text-2xl">Hear the next session first.</h2>
          <p className="mt-1 text-sm text-muted">Email signup is ready for a future mailing service connection.</p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
        <input
          type="email"
          placeholder="you@example.com"
          disabled
          className="rounded-full border border-border bg-background px-4 py-3 text-sm text-muted"
        />
        <button type="button" disabled className="rounded-full bg-panel-strong px-5 py-3 text-sm font-semibold text-muted">
          Coming soon
        </button>
      </div>
    </form>
  );
}
