
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LayoutGrid, FilePlus, Database } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full gradient-header">
        <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-white">
          <div className="w-16 h-16 bg-white/95 rounded-lg shadow-lg flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/e83a2a16-52d8-4777-b1fc-b625659f48c3.png" 
              alt="DataScience Logo" 
              className="w-12 h-12 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Empowering Decisions With AI
          </h1>
          <p className="mt-4 text-xl opacity-90 text-center max-w-2xl">
            Transform your data into actionable insights with our advanced analytics platform
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/query-builder">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Explore Our Platform
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Link to="/query-builder" className="group">
            <div className="bg-card border rounded-lg p-6 h-full transition-all duration-300 hover:shadow-md hover:border-primary/30 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <LayoutGrid className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Query Builder</h3>
              <p className="text-muted-foreground">Design and execute complex data queries visually without writing code</p>
            </div>
          </Link>
          
          <Link to="/rules" className="group">
            <div className="bg-card border rounded-lg p-6 h-full transition-all duration-300 hover:shadow-md hover:border-primary/30 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <FilePlus className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Rules</h3>
              <p className="text-muted-foreground">Create and manage business rules to automate your decision processes</p>
            </div>
          </Link>
          
          <Link to="/fields" className="group">
            <div className="bg-card border rounded-lg p-6 h-full transition-all duration-300 hover:shadow-md hover:border-primary/30 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Fields</h3>
              <p className="text-muted-foreground">Organize and configure your data fields for optimal analysis</p>
            </div>
          </Link>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-muted mt-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e83a2a16-52d8-4777-b1fc-b625659f48c3.png" 
                  alt="DataScience Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="ml-3 font-semibold">DataScience</span>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} DataScience. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
