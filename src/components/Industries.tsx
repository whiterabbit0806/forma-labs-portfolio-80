import { Card } from "@/components/ui/card";
import { 
  Heart, 
  TrendingUp, 
  Bitcoin, 
  Sparkles, 
  ShoppingBag, 
  GraduationCap,
  Building2,
  Laptop
} from "lucide-react";

const industries = [
  { name: "Healthcare", icon: Heart },
  { name: "Financial / FinTech", icon: TrendingUp },
  { name: "Crypto & Web3", icon: Bitcoin },
  { name: "Beauty & Skincare", icon: Sparkles },
  { name: "Fashion & Lifestyle", icon: ShoppingBag },
  { name: "Education", icon: GraduationCap },
  { name: "E-commerce", icon: Building2 },
  { name: "SaaS Products", icon: Laptop }
];

const Industries = () => {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating exceptional digital experiences across diverse sectors.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Card 
              key={industry.name}
              className="p-6 hover-lift bg-card border-border transition-all text-center group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <industry.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-sm">{industry.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
