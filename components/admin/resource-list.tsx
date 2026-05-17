import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pencil, ExternalLink } from "lucide-react";
import { DeleteButton } from "@/components/admin/delete-button";

export type ResourceItem = {
  id: string;
  title: string;
  subtitle?: string;
  badges?: { label: string; variant?: "default" | "outline" | "gradient" | "secondary" }[];
  publicHref?: string;
  editHref: string;
  deleteAction: () => Promise<{ error?: string; success?: boolean }>;
  deleteRedirect: string;
  deleteLabel?: string;
};

type ResourceListProps = {
  items: ResourceItem[];
  emptyMessage: string;
};

export function ResourceList({ items, emptyMessage }: ResourceListProps) {
  if (items.length === 0) {
    return <p className="text-muted-foreground">{emptyMessage}</p>;
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <Card key={item.id} className="glass border-border/50">
          <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-medium truncate">{item.title}</p>
              {item.subtitle && (
                <p className="text-sm text-muted-foreground line-clamp-1 mt-0.5">
                  {item.subtitle}
                </p>
              )}
              {item.badges && item.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.badges.map((b) => (
                    <Badge key={b.label} variant={b.variant ?? "outline"} className="text-xs">
                      {b.label}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {item.publicHref && (
                <Button variant="ghost" size="sm" asChild>
                  <Link href={item.publicHref} target="_blank">
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              <Button variant="outline" size="sm" asChild>
                <Link href={item.editHref}>
                  <Pencil className="h-4 w-4 mr-1" />
                  Edit
                </Link>
              </Button>
              <DeleteButton
                onDelete={item.deleteAction}
                redirectTo={item.deleteRedirect}
                label={item.deleteLabel}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
