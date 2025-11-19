import { Badge } from "@/components/ui/badge";

const techCategories = [
  {
    title: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "React Native", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Backend",
    techs: ["Node.js", "Laravel", "PHP", "Express", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools & Platforms",
    techs: ["Figma", "AWS", "Vercel", "Shopify", "WordPress", "Supabase"]
  },
  {
    title: "Practices",
    techs: ["CI/CD", "API Design", "Design Systems", "Testing", "DevOps", "Security"]
  }
];

const TechStack = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Tech Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern technologies and tools we use to build exceptional products.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {techCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="space-y-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default border-2"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
