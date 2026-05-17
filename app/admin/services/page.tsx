import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getServices } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default async function AdminServicesPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const services = await getServices();

  return (
    <div className="p-6 lg:p-8">
      <h1 className="font-display text-3xl font-bold mb-8">Services</h1>
      <div className="space-y-3">
        {services.map((service) => (
          <Card key={service.slug} className="glass border-border/50">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{service.title}</p>
                <p className="text-sm text-muted-foreground line-clamp-1">{service.shortDescription}</p>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/services/${service.slug}`} target="_blank">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
