export function dateTransform(date: string): string {
  return new Date(date).toLocaleString("ru", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
