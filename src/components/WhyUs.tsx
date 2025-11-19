import { Card } from "@/components/ui/card";
import { Target, Zap, Users, Shield } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Product-First Thinking",
    description: "We don't just build features—we solve problems. Every decision is driven by user needs and business outcomes."
  },
  {
    icon: Zap,
    title: "Speed & Quality",
    description: "Fast iteration without compromising craftsmanship. Beautiful, performant products delivered on time."
  },
  {
    icon: Users,
    title: "Founder-Led Studio",
    description: "Direct access to senior talent. No account managers, just experienced designers and engineers who care."
  },
  {
    icon: Shield,
    title: "Technical Excellence",
    description: "Modern stack, best practices, scalable architecture. Built to grow with your business."
  }
];

const WhyUs = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Why Forma Labs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elite craftsmanship meets founder-friendly partnership.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentiators.map((item, index) => (
            <Card 
              key={item.title}
              className="p-8 hover-lift bg-card border-border transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
