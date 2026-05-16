export const defaultShareImage = "https://media.kansaimusic.com/images/covers/Brittany-a-Mascalucia.webp";

export const copyrightShareImage =
  "https://media.kansaimusic.com/images/covers/Hollywood-Is-Burning.webp";

export function shareImage(url = defaultShareImage) {
  return [{ url, width: 1200, height: 1200, alt: "Kansai Music cover artwork" }];
}
