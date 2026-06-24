"use client";

import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/motion/motion-wrapper";
import type { ClientBrand } from "@/types/client";

type ClientsSectionProps = {
  clients: ClientBrand[];
};

function ClientLogo({ client }: { client: ClientBrand }) {
  return (
    <div className="flex shrink-0 items-center justify-center px-8 sm:px-12 h-[72px] min-w-[140px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={client.logo}
        alt={client.name}
        width={160}
        height={36}
        className="client-logo-mono"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}

export function ClientsSection({ clients }: ClientsSectionProps) {
  if (clients.length === 0) return null;

  const track = [...clients, ...clients];

  return (
    <section className="home-section home-section-alt overflow-hidden">
      <div className="container-custom mb-10 lg:mb-12">
        <MotionDiv className="text-center max-w-2xl mx-auto">
          <Badge variant="gradient" className="mb-4">
            Our Clients
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Trusted by Ambitious Brands
          </h2>
          <p className="mt-4 text-muted-foreground">
            From startups to established enterprises — teams that trust us to ship with confidence.
          </p>
        </MotionDiv>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-clients-marquee items-center gap-10 sm:gap-14 hover:[animation-play-state:paused]">
          {track.map((client, i) => (
            <ClientLogo key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
