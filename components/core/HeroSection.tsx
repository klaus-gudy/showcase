import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">Crafting Innovative Software Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
          Hi, I’m <span className="text-primary">Goodluck Madadi</span> .
          </h1>
          <p className="text-xl mb-8 text-muted-foreground leading-relaxed max-w-3xl mx-auto">I design and develop software solutions that empower businesses, enhance user experiences, and drive innovation across industries. <br /> Let’s create something extraordinary together.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <a 
              href="#projects" 
            >
              <Button size="lg" className="font-medium px-8">
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="px-8">
                Get in Touch
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left bg-card p-6 rounded-xl shadow-lg">
            {[
              "Delivering tailored solutions for complex challenges",
              "Collaborating with clients to bring ideas to life",
              "Creating scalable, future-proof applications"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 p-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-card-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;