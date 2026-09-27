"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckboxField, FieldError } from "@/components/admin/form-fields";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import type { ActionState } from "@/lib/admin/action-state";
import { initialActionState } from "@/lib/admin/action-state";
import type { CaseStudy } from "@/types";

type CaseStudyFormProps = {
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  caseStudy?: CaseStudy;
};

export function CaseStudyForm({ action, caseStudy }: CaseStudyFormProps) {
  const [state, formAction, pending] = useActionState(action, initialActionState);

  useEffect(() => {
    if (state.error) toast.error(state.error);
  }, [state.error]);

  return (
    <Card className="glass border-border/50 max-w-3xl">
      <CardContent className="p-6">
        <form action={formAction} encType="multipart/form-data" className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="title">Title *</Label>
              <Input id="title" name="title" defaultValue={caseStudy?.title} required />
              <FieldError errors={state.fieldErrors?.title} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" name="slug" defaultValue={caseStudy?.slug} placeholder="auto-from-title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="client">Client *</Label>
              <Input id="client" name="client" defaultValue={caseStudy?.client} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Input id="category" name="category" defaultValue={caseStudy?.category} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt *</Label>
            <Textarea id="excerpt" name="excerpt" rows={2} defaultValue={caseStudy?.excerpt} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea id="description" name="description" rows={6} defaultValue={caseStudy?.description} required />
          </div>

          <ImageUploadField
            id="coverImageFile"
            name="coverImageFile"
            label={caseStudy ? "Replace cover image" : "Cover image *"}
            hint="PNG, JPG, WebP, or SVG up to 5MB. Upload a screenshot of the live site."
            existingUrl={caseStudy?.coverImage}
            existingFieldName="coverImage"
            required={!caseStudy}
            previewClassName="h-40 w-full max-w-none object-cover object-top"
            previewWrapperClassName="p-0"
            errors={state.fieldErrors?.coverImage}
          />

          <div className="space-y-2">
            <Label htmlFor="gallery">Gallery URLs (one per line)</Label>
            <Textarea
              id="gallery"
              name="gallery"
              rows={3}
              defaultValue={caseStudy?.gallery?.join("\n")}
              placeholder="/portfolio/project-full.jpg"
            />
            <p className="text-xs text-muted-foreground">
              Optional extra screenshots. Use uploaded paths like /uploads/... or /portfolio/...
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="technologies">Technologies (comma-separated)</Label>
            <Input id="technologies" name="technologies" defaultValue={caseStudy?.technologies?.join(", ")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="metricsJson">Metrics (JSON)</Label>
            <Textarea
              id="metricsJson"
              name="metricsJson"
              rows={3}
              className="font-mono text-xs"
              defaultValue={JSON.stringify(caseStudy?.metrics ?? [], null, 2)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timelineJson">Timeline (JSON)</Label>
            <Textarea
              id="timelineJson"
              name="timelineJson"
              rows={4}
              className="font-mono text-xs"
              defaultValue={JSON.stringify(caseStudy?.timeline ?? [], null, 2)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tintKey">Tint key</Label>
              <Input
                id="tintKey"
                name="tintKey"
                defaultValue={caseStudy?.tintKey}
                placeholder="priyos, englishence, …"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mockup">Mockup</Label>
              <Input
                id="mockup"
                name="mockup"
                defaultValue={caseStudy?.mockup}
                placeholder="shop, score, chat, dash, canvas"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="liveUrl">Live URL</Label>
              <Input id="liveUrl" name="liveUrl" type="url" defaultValue={caseStudy?.liveUrl} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="servicesLabel">Services label</Label>
              <Input id="servicesLabel" name="servicesLabel" defaultValue={caseStudy?.servicesLabel} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="stackLabel">Stack label</Label>
              <Input id="stackLabel" name="stackLabel" defaultValue={caseStudy?.stackLabel} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="timelineLabel">Timeline label</Label>
              <Input id="timelineLabel" name="timelineLabel" defaultValue={caseStudy?.timelineLabel} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="brief">Brief</Label>
            <Textarea id="brief" name="brief" rows={4} defaultValue={caseStudy?.brief} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="builtItems">What we built (one per line)</Label>
            <Textarea
              id="builtItems"
              name="builtItems"
              rows={4}
              defaultValue={caseStudy?.builtItems?.join("\n")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="howItRanJson">How it ran (JSON)</Label>
            <Textarea
              id="howItRanJson"
              name="howItRanJson"
              rows={4}
              className="font-mono text-xs"
              defaultValue={JSON.stringify(caseStudy?.howItRan ?? [], null, 2)}
              placeholder='[{"title":"Weeks 1–2 · Discovery","body":"…"}]'
            />
          </div>

          <div className="flex flex-wrap gap-6">
            <CheckboxField id="featured" name="featured" label="Featured" defaultChecked={caseStudy?.featured} />
            <CheckboxField
              id="published"
              name="published"
              label="Published"
              defaultChecked={caseStudy?.published ?? true}
            />
          </div>

          <Button type="submit" variant="gradient" disabled={pending}>
            {pending ? "Saving..." : caseStudy ? "Update case study" : "Create case study"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
