import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-8 w-8 text-primary-light" />
              <span className="font-heading text-xl font-bold">My Portfolio</span>
            </div>
            <p className="text-gray-400">
              Showcasing innovative software solutions and a passion for technology.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Projects</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Property & Tenant Management System</li>
              <li>Healthcare Interactive System</li>
              <li>Online Market Place</li>
              <li>Financial Planner App</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Technologies</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Typescript & Next.js</li>
              <li>Angular & spring boot</li>
              <li>Next.js & Django</li>
              <li>Flutter & PostgreSQL</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>klausongudy@gmail.com</li>
              <li>+255 623470540</li>
              <li>Dar-es-salaam, Tanzania</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
