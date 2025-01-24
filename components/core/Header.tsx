import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-8 w-8 text-primary" />
          <span className="font-heading text-xl font-bold text-primary">Showcase</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-600 hover:text-primary">About Me</a>
          <a href="#projects" className="text-gray-600 hover:text-primary">Projects</a>
          <a href="#skills" className="text-gray-600 hover:text-primary">Skills</a>
          <a href="#experience" className="text-gray-600 hover:text-primary">Experience</a>
          <a href="#education" className="text-gray-600 hover:text-primary">Education</a>
          <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
        </nav>
        <Button className="bg-primary hover:bg-primary-dark text-white">
          Download Resume
        </Button>
      </div>
    </header>
  );
};

export default Header;