export function SectionSkeleton({ cards = 3 }: { cards?: number }) {
  return (
    <section className="home-section" aria-hidden>
      <div className="container-custom animate-pulse">
        <div className="h-6 w-32 bg-muted/60 rounded-full mb-4 mx-auto sm:mx-0" />
        <div className="h-10 w-72 max-w-full bg-muted/60 rounded-lg mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: cards }).map((_, i) => (
            <div key={i} className="h-56 rounded-2xl bg-muted/40 border border-border/30" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientsSkeleton() {
  return (
    <section className="home-section home-section-alt" aria-hidden>
      <div className="container-custom animate-pulse mb-10">
        <div className="h-6 w-32 bg-muted/60 rounded-full mb-4 mx-auto" />
        <div className="h-10 w-80 max-w-full bg-muted/60 rounded-lg mx-auto" />
      </div>
      <div className="flex gap-10 px-8 animate-pulse overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-10 w-32 shrink-0 rounded-lg bg-muted/40" />
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section className="home-section home-section-alt" aria-hidden>
      <div className="container-custom max-w-4xl animate-pulse text-center">
        <div className="h-6 w-36 bg-muted/60 rounded-full mb-6 mx-auto" />
        <div className="h-8 w-full max-w-2xl bg-muted/40 rounded-lg mx-auto mb-3" />
        <div className="h-8 w-full max-w-xl bg-muted/40 rounded-lg mx-auto" />
      </div>
    </section>
  );
}
