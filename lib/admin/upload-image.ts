import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomBytes } from "crypto";

const ALLOWED_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/svg+xml",
]);

const MIME_TO_EXT: Record<string, string> = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/webp": ".webp",
  "image/svg+xml": ".svg",
};

const MAX_SIZE = 5 * 1024 * 1024;

function extensionFor(file: File): string {
  const fromMime = MIME_TO_EXT[file.type];
  if (fromMime) return fromMime;
  const fromName = path.extname(file.name).toLowerCase();
  if ([".png", ".jpg", ".jpeg", ".webp", ".svg"].includes(fromName)) {
    return fromName === ".jpeg" ? ".jpg" : fromName;
  }
  return ".png";
}

export async function saveUploadedImage(
  file: File,
  subdir: string
): Promise<string> {
  if (!file.size) {
    throw new Error("No file provided");
  }
  if (file.size > MAX_SIZE) {
    throw new Error("Image must be under 5MB");
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new Error("Invalid file type. Use PNG, JPG, WebP, or SVG.");
  }

  const filename = `${Date.now()}-${randomBytes(4).toString("hex")}${extensionFor(file)}`;
  const dir = path.join(process.cwd(), "public", "uploads", subdir);
  await mkdir(dir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(dir, filename), buffer);
  return `/uploads/${subdir}/${filename}`;
}
