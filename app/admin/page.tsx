import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getDashboardStats } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Briefcase, Mail, Layers } from "lucide-react";

export default async function AdminDashboardPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const stats = await getDashboardStats();

  const cards = [
    { label: "Services", value: stats.services, icon: Layers, color: "text-indigo-500" },
    { label: "Blog Posts", value: stats.blogs, icon: FileText, color: "text-purple-500" },
    { label: "Case Studies", value: stats.caseStudies, icon: Briefcase, color: "text-pink-500" },
    { label: "New Leads", value: stats.newLeads, icon: Mail, color: "text-cyan-500" },
  ];

  return (
    <div className="p-6 lg:p-8">
      <h1 className="font-display text-3xl font-bold mb-2">
        Welcome back, {session.user?.name?.split(" ")[0] ?? "Admin"}
      </h1>
      <p className="text-muted-foreground mb-8">Here&apos;s what&apos;s happening with your agency.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.label} className="glass border-border/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.label}
                </CardTitle>
                <Icon className={`h-5 w-5 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{card.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mt-8 glass border-border/50">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>• Manage content from the sidebar navigation</p>
          <p>• Run <code className="text-primary">npm run seed</code> to populate the database</p>
          <p>• Configure environment variables in <code className="text-primary">.env.local</code></p>
        </CardContent>
      </Card>
    </div>
  );
}
