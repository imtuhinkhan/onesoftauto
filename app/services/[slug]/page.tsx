import { permanentRedirect } from "next/navigation";

export default function ServiceDetailRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  void params;
  permanentRedirect("/#services");
}
