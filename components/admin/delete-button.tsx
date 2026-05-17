"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { ActionState } from "@/lib/admin/action-state";

type DeleteButtonProps = {
  onDelete: () => Promise<ActionState>;
  redirectTo: string;
  label?: string;
};

export function DeleteButton({
  onDelete,
  redirectTo,
  label = "item",
}: DeleteButtonProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function handleDelete() {
    if (!confirm(`Delete this ${label}? This cannot be undone.`)) return;

    startTransition(async () => {
      const result = await onDelete();
      if (result.error) {
        toast.error(result.error);
        return;
      }
      toast.success("Deleted successfully");
      router.push(redirectTo);
      router.refresh();
    });
  }

  return (
    <Button
      type="button"
      variant="destructive"
      size="sm"
      onClick={handleDelete}
      disabled={pending}
    >
      <Trash2 className="h-4 w-4" />
      {pending ? "Deleting..." : "Delete"}
    </Button>
  );
}
