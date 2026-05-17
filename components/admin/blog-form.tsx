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
import type { BlogPost } from "@/types";

type BlogFormProps = {
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  blog?: BlogPost;
};

export function BlogForm({ action, blog }: BlogFormProps) {
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
              <Input id="title" name="title" defaultValue={blog?.title} required />
              <FieldError errors={state.fieldErrors?.title} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" name="slug" defaultValue={blog?.slug} placeholder="auto-from-title" />
              <FieldError errors={state.fieldErrors?.slug} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Input id="category" name="category" defaultValue={blog?.category} required />
              <FieldError errors={state.fieldErrors?.category} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt *</Label>
            <Textarea id="excerpt" name="excerpt" rows={2} defaultValue={blog?.excerpt} required />
            <FieldError errors={state.fieldErrors?.excerpt} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content (HTML) *</Label>
            <Textarea id="content" name="content" rows={10} defaultValue={blog?.content} required />
            <FieldError errors={state.fieldErrors?.content} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="coverImage">Cover image URL *</Label>
              <Input id="coverImage" name="coverImage" type="url" defaultValue={blog?.coverImage} required />
              <FieldError errors={state.fieldErrors?.coverImage} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="readTime">Read time (minutes)</Label>
              <Input id="readTime" name="readTime" type="number" min={1} defaultValue={blog?.readTime ?? 5} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author *</Label>
              <Input id="author" name="author" defaultValue={blog?.author} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="authorAvatar">Author avatar URL</Label>
              <Input id="authorAvatar" name="authorAvatar" type="url" defaultValue={blog?.authorAvatar} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input id="tags" name="tags" defaultValue={blog?.tags?.join(", ")} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="seoTitle">SEO title</Label>
              <Input id="seoTitle" name="seoTitle" defaultValue={blog?.seoTitle} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seoDescription">SEO description</Label>
              <Input id="seoDescription" name="seoDescription" defaultValue={blog?.seoDescription} />
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <CheckboxField id="featured" name="featured" label="Featured" defaultChecked={blog?.featured} />
            <CheckboxField id="published" name="published" label="Published" defaultChecked={blog?.published ?? true} />
          </div>

          <Button type="submit" variant="gradient" disabled={pending}>
            {pending ? "Saving..." : blog ? "Update blog" : "Create blog"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
