import {
  Globe,
  Layers,
  Smartphone,
  Brain,
  ShoppingBag,
  Workflow,
  TrendingUp,
  Palette,
  LayoutTemplate,
  Server,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
  globe: Globe,
  layers: Layers,
  smartphone: Smartphone,
  brain: Brain,
  "shopping-bag": ShoppingBag,
  workflow: Workflow,
  "trending-up": TrendingUp,
  palette: Palette,
  wordpress: LayoutTemplate,
  server: Server,
  shield: ShieldCheck,
};

export function getServiceIcon(icon: string): LucideIcon {
  return SERVICE_ICON_MAP[icon] ?? Globe;
}
