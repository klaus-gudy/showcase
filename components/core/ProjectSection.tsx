import { Bot, ChartPie, CheckCircle, Home, HeartPulse, Rocket } from "lucide-react";
import FeatureCard from "./FeatureCard";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into the impactful solutions I’ve built and delivered,
            showcasing my expertise and passion for technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={Bot}
            title="License Plate Recognition System"
            description="Developed a vehicle parking application with license plate scanning, automated billing, and enforcement notification systems."
          />
          <FeatureCard
            icon={ChartPie}
            title="Financial Planner App"
            description="Built a mobile app to track income, expenses, and wallets, integrated with educational finance content for user growth."
          />
          <FeatureCard
            icon={Rocket}
            title="Online Marketplace"
            description="Built a platform to connect entrepreneurs with investors, enabling collaboration, funding opportunities, and networking in a seamless digital environment."
          />
          <FeatureCard
            icon={HeartPulse}
            title="Healthcare Interactivity System"
            description="Enhanced an existing healthcare management system to improve provider interactivity, streamline patient management, and boost overall system efficiency."
          />
          <FeatureCard
            icon={Home}
            title="Property and Tenants Management System"
            description="Developed an all-in-one property management platform, streamlining tasks such as rent collection, maintenance requests, and lease management."
          />
          <FeatureCard
            icon={CheckCircle}
            title="Task Management System"
            description="Created a web-based application to manage projects and tasks efficiently, with real-time updates and detailed reporting features."
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;