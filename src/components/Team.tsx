import { Card } from "@/components/ui/card";
import { Palette, Code, Server, Layers } from "lucide-react";

const team = [
  {
    name: "Sarah Chen",
    role: "Lead Product Designer",
    icon: Palette,
    expertise: "UI/UX, Design Systems, Brand Identity",
    bio: "10+ years crafting digital experiences for startups and global brands."
  },
  {
    name: "Marcus Rivera",
    role: "Senior UI/UX Designer",
    icon: Palette,
    expertise: "Mobile Design, Prototyping, User Research",
    bio: "Specialized in creating intuitive interfaces that users love."
  },
  {
    name: "Elena Kowalski",
    role: "Visual Designer",
    icon: Palette,
    expertise: "Visual Identity, Web Design, Illustration",
    bio: "Bringing brands to life through thoughtful visual storytelling."
  },
  {
    name: "David Park",
    role: "Senior Frontend Developer",
    icon: Code,
    expertise: "React, Next.js, Animations, Performance",
    bio: "Building blazing-fast interfaces with pixel-perfect precision."
  },
  {
    name: "Aisha Nkomo",
    role: "Frontend Developer",
    icon: Code,
    expertise: "React Native, Tailwind, Interactive UIs",
    bio: "Creating delightful mobile experiences with modern tech."
  },
  {
    name: "James Thompson",
    role: "Backend Developer",
    icon: Server,
    expertise: "Node.js, Laravel, API Design, Security",
    bio: "Architecting robust, scalable backend systems that just work."
  },
  {
    name: "Alex Martinez",
    role: "Full-Stack Developer",
    icon: Layers,
    expertise: "Architecture, DevOps, CI/CD, Cloud",
    bio: "End-to-end product development with focus on scalability."
  }
];

const Team = () => {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">The Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seven specialized experts bringing diverse skills and a shared passion for exceptional digital products.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={member.name} 
              className="p-8 hover-lift bg-card border-border transition-all"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                  <member.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-4">{member.expertise}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
