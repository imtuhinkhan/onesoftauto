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
import type { Testimonial } from "@/types";

type TestimonialFormProps = {
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  testimonial?: Testimonial;
};

export function TestimonialForm({ action, testimonial }: TestimonialFormProps) {
  const [state, formAction, pending] = useActionState(action, initialActionState);

  useEffect(() => {
    if (state.error) toast.error(state.error);
  }, [state.error]);

  return (
    <Card className="glass border-border/50 max-w-2xl">
      <CardContent className="p-6">
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="quote">Quote *</Label>
            <Textarea id="quote" name="quote" rows={4} defaultValue={testimonial?.quote} required />
            <FieldError errors={state.fieldErrors?.quote} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="author">Author *</Label>
              <Input id="author" name="author" defaultValue={testimonial?.author} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role *</Label>
              <Input id="role" name="role" defaultValue={testimonial?.role} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input id="company" name="company" defaultValue={testimonial?.company} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rating">Rating (1-5)</Label>
              <Input id="rating" name="rating" type="number" min={1} max={5} defaultValue={testimonial?.rating ?? 5} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="avatar">Avatar URL</Label>
              <Input id="avatar" name="avatar" type="url" defaultValue={testimonial?.avatar} />
            </div>
          </div>

          <CheckboxField id="published" name="published" label="Published" defaultChecked={testimonial?.published ?? true} />

          <Button type="submit" variant="gradient" disabled={pending}>
            {pending ? "Saving..." : testimonial ? "Update testimonial" : "Create testimonial"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
