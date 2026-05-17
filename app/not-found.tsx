import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="font-display text-6xl font-bold gradient-text">404</h1>
      <h2 className="font-display text-2xl font-bold">Page not found</h2>
      <p className="text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Button variant="gradient" asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}
