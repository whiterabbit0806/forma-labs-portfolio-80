import { Palette, Code2, Sparkles, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Software Design",
    description: "UI/UX design, web & mobile app design, design systems, interactive prototypes, and brand identity that captivates.",
    features: [
      "UI/UX Design",
      "Mobile & Web Design",
      "Design Systems",
      "Prototyping",
      "Visual Identity"
    ]
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Modern web development with React, Next.js, Node.js, Laravel. Building fast, scalable, and delightful products.",
    features: [
      "React & Next.js",
      "Node.js & Laravel",
      "API Development",
      "Mobile Apps",
      "E-commerce Solutions"
    ]
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Cutting-edge AI features to make your product smarter, faster, and more intuitive for your users.",
    features: [
      "AI-Powered Features",
      "Smart Automation",
      "ML Integration",
      "Intelligent UX",
      "Data-Driven Insights"
    ]
  },
  {
    icon: Smartphone,
    title: "Product Development",
    description: "End-to-end product development from concept to launch, with a focus on user experience and technical excellence.",
    features: [
      "Full-Stack Development",
      "DevOps & CI/CD",
      "Architecture Design",
      "Performance Optimization",
      "Scalable Solutions"
    ]
  }
];

const Services = () => {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">What We Create</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to launch, we build digital products that combine beauty, performance, and reliability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="p-8 hover-lift bg-card border-border transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
