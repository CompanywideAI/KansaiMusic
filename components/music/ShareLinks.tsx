"use client";

import { useMemo, useState } from "react";
import { Copy, Facebook, Mail, Twitter } from "lucide-react";
import { Track } from "@/src/data/tracks";

export function ShareLinks({ track }: { track: Track }) {
  const [copied, setCopied] = useState(false);
  const url = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);
  const encodedUrl = encodeURIComponent(url);
  const text = encodeURIComponent(`Listen to ${track.title} by Gintz Music`);

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={copyLink}
        className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted hover:border-accent hover:text-foreground"
      >
        <Copy className="h-4 w-4" />
        {copied ? "Copied" : "Copy link"}
      </button>
      <a className="focus-ring rounded-full border border-border p-2.5 text-muted hover:border-accent hover:text-foreground" href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`} aria-label="Share on X">
        <Twitter className="h-4 w-4" />
      </a>
      <a className="focus-ring rounded-full border border-border p-2.5 text-muted hover:border-accent hover:text-foreground" href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} aria-label="Share on Facebook">
        <Facebook className="h-4 w-4" />
      </a>
      <a className="focus-ring rounded-full border border-border p-2.5 text-muted hover:border-accent hover:text-foreground" href={`mailto:?subject=${text}&body=${encodedUrl}`} aria-label="Share by email">
        <Mail className="h-4 w-4" />
      </a>
    </div>
  );
}
