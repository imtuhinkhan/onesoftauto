import { saveUploadedImage } from "@/lib/admin/upload-image";

export async function resolveUploadedImage(
  formData: FormData,
  options: {
    fileField: string;
    existingField: string;
    subdir: string;
    requiredMessage: string;
  }
): Promise<{ url: string } | { error: string }> {
  const file = formData.get(options.fileField);
  if (file instanceof File && file.size > 0) {
    try {
      const url = await saveUploadedImage(file, options.subdir);
      return { url };
    } catch (e) {
      return {
        error: e instanceof Error ? e.message : "Failed to upload image",
      };
    }
  }

  const existing = String(formData.get(options.existingField) ?? "").trim();
  if (existing) return { url: existing };

  return { error: options.requiredMessage };
}
