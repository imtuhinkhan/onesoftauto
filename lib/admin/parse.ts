import slugify from "slugify";

export function toSlug(value: string) {
  return slugify(value, { lower: true, strict: true });
}

export function linesToArray(value: string | null | undefined): string[] {
  if (!value?.trim()) return [];
  return value
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function commaToArray(value: string | null | undefined): string[] {
  if (!value?.trim()) return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function parseJsonField<T>(
  value: string | null | undefined,
  fallback: T
): T {
  if (!value?.trim()) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function checkboxValue(value: FormDataEntryValue | null) {
  return value === "on" || value === "true";
}
