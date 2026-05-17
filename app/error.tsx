"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="font-display text-2xl font-bold">Something went wrong</h2>
      <p className="text-muted-foreground max-w-md">{error.message}</p>
      <Button variant="gradient" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
