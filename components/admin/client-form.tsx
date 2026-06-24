"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckboxField, FieldError } from "@/components/admin/form-fields";
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
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Client name *</Label>
            <Input id="name" name="name" defaultValue={client?.name} required />
            <FieldError errors={state.fieldErrors?.name} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="logo">Logo URL or path *</Label>
            <Input
              id="logo"
              name="logo"
              defaultValue={client?.logo}
              placeholder="/clients/novapay.svg or https://..."
              required
            />
            <p className="text-xs text-muted-foreground">
              Use a path like /clients/logo.svg or a full image URL. Logos display in monochrome on the home page.
            </p>
            <FieldError errors={state.fieldErrors?.logo} />
          </div>

          {client?.logo && (
            <div className="rounded-xl border border-border/50 bg-card/40 p-6 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                className="client-logo-mono h-10 w-auto max-w-[180px]"
              />
            </div>
          )}

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
