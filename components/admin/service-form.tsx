"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckboxField, FieldError } from "@/components/admin/form-fields";
import type { ActionState } from "@/lib/admin/action-state";
import { initialActionState } from "@/lib/admin/action-state";
import type { Service } from "@/types";

type ServiceFormProps = {
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  service?: Service;
};

export function ServiceForm({ action, service }: ServiceFormProps) {
  const [state, formAction, pending] = useActionState(action, initialActionState);

  useEffect(() => {
    if (state.error) toast.error(state.error);
  }, [state.error]);

  return (
    <Card className="glass border-border/50 max-w-3xl">
      <CardContent className="p-6">
        <form action={formAction} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="title">Title *</Label>
              <Input id="title" name="title" defaultValue={service?.title} required />
              <FieldError errors={state.fieldErrors?.title} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" name="slug" defaultValue={service?.slug} placeholder="auto-from-title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="icon">Icon key</Label>
              <Input id="icon" name="icon" defaultValue={service?.icon ?? "code"} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order">Display order</Label>
              <Input id="order" name="order" type="number" min={0} defaultValue={service?.order ?? 0} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="shortDescription">Short description *</Label>
            <Textarea id="shortDescription" name="shortDescription" rows={2} defaultValue={service?.shortDescription} required />
            <FieldError errors={state.fieldErrors?.shortDescription} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Full description *</Label>
            <Textarea id="description" name="description" rows={6} defaultValue={service?.description} required />
            <FieldError errors={state.fieldErrors?.description} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="features">Features (one per line)</Label>
            <Textarea id="features" name="features" rows={5} defaultValue={service?.features?.join("\n")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="technologies">Technologies (comma-separated)</Label>
            <Input id="technologies" name="technologies" defaultValue={service?.technologies?.join(", ")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="processJson">Process steps (JSON array)</Label>
            <Textarea
              id="processJson"
              name="processJson"
              rows={4}
              defaultValue={JSON.stringify(service?.process ?? [], null, 2)}
              className="font-mono text-xs"
            />
            <p className="text-xs text-muted-foreground">Example: [{`{"title":"Discovery","description":"..."}`}]</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="faqsJson">FAQs (JSON array)</Label>
            <Textarea
              id="faqsJson"
              name="faqsJson"
              rows={4}
              defaultValue={JSON.stringify(service?.faqs ?? [], null, 2)}
              className="font-mono text-xs"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pricingTeaser">Pricing teaser</Label>
            <Input id="pricingTeaser" name="pricingTeaser" defaultValue={service?.pricingTeaser} />
          </div>

          <CheckboxField id="published" name="published" label="Published" defaultChecked={service?.published ?? true} />

          <Button type="submit" variant="gradient" disabled={pending}>
            {pending ? "Saving..." : service ? "Update service" : "Create service"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
