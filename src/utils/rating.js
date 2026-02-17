export function getRatingClass(rating) {
  const r = Number(rating);
  if (r >= 8) return "rating-good";
  if (r >= 5) return "rating-mid";
  return "rating-bad";
}