import fs from "node:fs";
import path from "node:path";
import eventsMeta from "../../data/events.json";

const EVENTS_DIR = path.join(process.cwd(), "public", "images", "events");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg"]);

export type EventWithPhotos = {
  slug: string;
  name: string;
  description?: string;
  photos: string[];
};

function listPhotos(slug: string): string[] {
  const dir = path.join(EVENTS_DIR, slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => `/images/events/${slug}/${file}`);
}

export function getEventsWithPhotos(): EventWithPhotos[] {
  return eventsMeta.map((event) => ({
    ...event,
    photos: listPhotos(event.slug),
  }));
}
