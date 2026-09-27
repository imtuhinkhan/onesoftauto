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
import type { Faq } from "@/types";

type FaqFormProps = {
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  faq?: Faq;
};

export function FaqForm({ action, faq }: FaqFormProps) {
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
              <Label htmlFor="group">Group *</Label>
              <Input
                id="group"
                name="group"
                defaultValue={faq?.group}
                placeholder="Working together"
                required
              />
              <FieldError errors={state.fieldErrors?.group} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="question">Question *</Label>
              <Input id="question" name="question" defaultValue={faq?.question} required />
              <FieldError errors={state.fieldErrors?.question} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="order">Display order</Label>
              <Input id="order" name="order" type="number" min={0} defaultValue={faq?.order ?? 0} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="answer">Answer *</Label>
            <Textarea id="answer" name="answer" rows={5} defaultValue={faq?.answer} required />
            <FieldError errors={state.fieldErrors?.answer} />
          </div>

          <CheckboxField
            id="published"
            name="published"
            label="Published"
            defaultChecked={faq?.published ?? true}
          />

          <Button type="submit" variant="gradient" disabled={pending}>
            {pending ? "Saving..." : faq ? "Update FAQ" : "Create FAQ"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
