"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/admin/form-fields";
import { cn } from "@/lib/utils";

type ImageUploadFieldProps = {
  id: string;
  name: string;
  label: string;
  hint?: string;
  existingUrl?: string;
  required?: boolean;
  previewClassName?: string;
  errors?: string[];
};

export function ImageUploadField({
  id,
  name,
  label,
  hint,
  existingUrl,
  required,
  previewClassName,
  errors,
}: ImageUploadFieldProps) {
  const [preview, setPreview] = useState<string | null>(existingUrl ?? null);

  useEffect(() => {
    setPreview(existingUrl ?? null);
  }, [existingUrl]);

  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview((current) => {
      if (current?.startsWith("blob:")) URL.revokeObjectURL(current);
      return URL.createObjectURL(file);
    });
  };

  return (
    <div className="space-y-2">
      {existingUrl && <input type="hidden" name="logo" value={existingUrl} />}
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/svg+xml,.svg"
        required={required}
        onChange={onFileChange}
        className="cursor-pointer file:mr-4 file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/20"
      />
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      <FieldError errors={errors} />
      {preview && (
        <div className="rounded-xl border border-border/50 bg-card/40 p-6 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt="Logo preview"
            className={cn("h-10 w-auto max-w-[180px]", previewClassName)}
          />
        </div>
      )}
    </div>
  );
}
