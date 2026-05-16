import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function siteUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://kansaimusic.com";
  return new URL(path, base).toString();
}

export function contactEmail() {
  return process.env.CONTACT_EMAIL || "hello@kansaimusic.com";
}
