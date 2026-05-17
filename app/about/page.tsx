import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { CTASection } from "@/components/home/sections";
import { MotionDiv } from "@/components/motion/motion-wrapper";
import { Target, Eye, Heart, Zap, Shield, Users } from "lucide-react";
import { getPageMetadata } from "@/lib/seo/page";

export async function generateMetadata() {
  return getPageMetadata({
    title: "About Us",
    description: "Learn about our mission, values, and the team behind your next digital product.",
    path: "/about",
  });
}

const values = [
  { icon: Target, title: "Excellence", desc: "We deliver nothing short of world-class quality." },
  { icon: Heart, title: "Partnership", desc: "Your success is our success — we're in this together." },
  { icon: Zap, title: "Innovation", desc: "We stay ahead of technology to give you the edge." },
  { icon: Shield, title: "Integrity", desc: "Transparent communication and honest timelines." },
  { icon: Users, title: "Collaboration", desc: "Cross-functional teams aligned on your goals." },
  { icon: Eye, title: "Vision", desc: "We see the big picture while nailing the details." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative section-padding page-hero-offset overflow-hidden">
        <GradientBlob />
        <div className="container-custom relative z-10 max-w-3xl">
          <Badge variant="gradient" className="mb-4">About Us</Badge>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            Crafting Digital <span className="gradient-text">Excellence</span> Since 2018
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Onesoftauto is a premium software agency born from a simple belief: great software
            transforms businesses. We combine design thinking, engineering rigor, and strategic
            insight to build products that users love and businesses depend on.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card/30">
        <div className="container-custom grid md:grid-cols-2 gap-12">
          <Card className="glass border-border/50">
            <CardContent className="p-8">
              <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower ambitious brands with technology that scales — delivering measurable
                impact through beautiful, performant, and maintainable software.
              </p>
            </CardContent>
          </Card>
          <Card className="glass border-border/50">
            <CardContent className="p-8">
              <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the most trusted digital partner for companies building the future — known
                for craftsmanship, innovation, and results that speak for themselves.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <MotionDiv key={v.title} delay={i * 0.05}>
                <Card className="glass border-border/50 h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <v.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-lg">{v.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
