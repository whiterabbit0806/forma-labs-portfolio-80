import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import healthcareImg from "@/assets/project-healthcare.jpg";
import fintechImg from "@/assets/project-fintech.jpg";
import fashionImg from "@/assets/project-fashion.jpg";
import saasImg from "@/assets/project-saas.jpg";

const projects = [
  {
    title: "HealthSync",
    category: "Healthcare",
    description: "Modern telemedicine platform connecting patients with specialists. Intuitive scheduling, video consultations, and health records management.",
    tags: ["UI/UX Design", "React Native", "Node.js"],
    image: healthcareImg,
    results: "3x increase in patient engagement",
    link: "https://www.figma.com/design/healthsync-telemedicine"
  },
  {
    title: "FinFlow",
    category: "FinTech",
    description: "AI-powered financial analytics dashboard for investment firms. Real-time data visualization and predictive insights.",
    tags: ["Data Visualization", "Next.js", "AI Integration"],
    image: fintechImg,
    results: "50% faster decision making",
    link: "https://www.behance.net/gallery/finflow-dashboard"
  },
  {
    title: "Aura Collection",
    category: "Fashion E-commerce",
    description: "Luxury fashion marketplace with immersive shopping experience. Premium design, smooth checkout, and personalized recommendations.",
    tags: ["E-commerce", "Shopify", "Design System"],
    image: fashionImg,
    results: "2x conversion rate",
    link: "https://www.figma.com/design/aura-collection-ecommerce"
  },
  {
    title: "TeamFlow",
    category: "SaaS Platform",
    description: "Collaborative project management tool for modern teams. Clean interface, powerful features, delightful to use.",
    tags: ["Full-Stack", "React", "Laravel"],
    image: saasImg,
    results: "10k+ active users",
    link: "https://www.behance.net/gallery/teamflow-saas"
  }
];

const Portfolio = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing our design craft and technical excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card 
                className="overflow-hidden hover-lift group border-border transition-all cursor-pointer h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden bg-secondary">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400 transform translate-y-4 group-hover:translate-y-0">
                      View Project →
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div>
                    <span className="text-sm text-accent font-medium">{project.category}</span>
                    <h3 className="text-3xl font-bold mt-2 mb-3">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-accent">{project.results}</p>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
