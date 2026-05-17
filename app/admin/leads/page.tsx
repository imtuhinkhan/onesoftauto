import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getLeads } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export default async function AdminLeadsPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const leads = await getLeads();

  return (
    <div className="p-6 lg:p-8">
      <h1 className="font-display text-3xl font-bold mb-8">Contact Inquiries</h1>
      {leads.length === 0 ? (
        <p className="text-muted-foreground">No leads yet. Connect MongoDB and submit the contact form.</p>
      ) : (
        <div className="space-y-4">
          {leads.map((lead: {
            _id: string;
            name: string;
            email: string;
            company?: string;
            service?: string;
            message: string;
            status: string;
            createdAt: string;
          }) => (
            <Card key={lead._id} className="glass border-border/50">
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{lead.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{lead.email}</p>
                </div>
                <Badge variant={lead.status === "new" ? "default" : "secondary"}>{lead.status}</Badge>
              </CardHeader>
              <CardContent>
                {lead.company && <p className="text-sm"><strong>Company:</strong> {lead.company}</p>}
                {lead.service && <p className="text-sm"><strong>Service:</strong> {lead.service}</p>}
                <p className="text-sm mt-2">{lead.message}</p>
                <p className="text-xs text-muted-foreground mt-3">{formatDate(lead.createdAt)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
