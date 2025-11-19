import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Together</h2>
            <p className="text-xl text-muted-foreground">
              Ready to create something exceptional? Tell us about your project.
            </p>
          </div>
          
          <Card className="p-8 md:p-12 border-border">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="h-12 bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="h-12 bg-background border-border"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Company</label>
                <Input 
                  placeholder="Your company (optional)" 
                  className="h-12 bg-background border-border"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your project, goals, and timeline..." 
                  className="min-h-32 bg-background border-border resize-none"
                />
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg rounded-xl transition-all hover:shadow-medium"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
            
            <div className="mt-12 pt-8 border-t border-border text-center">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <a href="mailto:hello@formalabs.co" className="hover:text-accent transition-colors">
                  hello@formalabs.co
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
