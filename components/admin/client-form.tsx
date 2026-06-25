"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckboxField, FieldError } from "@/components/admin/form-fields";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import type { ActionState } from "@/lib/admin/action-state";
import { initialActionState } from "@/lib/admin/action-state";
import type { ClientBrand } from "@/types/client";

type ClientFormProps = {
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  client?: ClientBrand;
};

export function ClientForm({ action, client }: ClientFormProps) {
  const [state, formAction, pending] = useActionState(action, initialActionState);

  useEffect(() => {
    if (state.error) toast.error(state.error);
  }, [state.error]);

  return (
    <Card className="glass border-border/50 max-w-2xl">
      <CardContent className="p-6">
        <form action={formAction} encType="multipart/form-data" className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Client name *</Label>
            <Input id="name" name="name" defaultValue={client?.name} required />
            <FieldError errors={state.fieldErrors?.name} />
          </div>

          <ImageUploadField
            id="logoFile"
            name="logoFile"
            label={client ? "Replace logo" : "Client logo *"}
            hint="PNG, JPG, WebP, or SVG up to 1MB. Logos display in monochrome on the home page."
            existingUrl={client?.logo}
            required={!client}
            previewClassName="client-logo-mono"
            errors={state.fieldErrors?.logo}
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="website">Website URL</Label>
              <Input id="website" name="website" type="url" defaultValue={client?.website} placeholder="https://..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order">Display order</Label>
              <Input id="order" name="order" type="number" min={0} defaultValue={client?.order ?? 0} />
            </div>
          </div>

          <CheckboxField id="published" name="published" label="Published" defaultChecked={client?.published ?? true} />

          <Button type="submit" variant="gradient" disabled={pending}>
            {pending ? "Saving..." : client ? "Update client" : "Add client"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
