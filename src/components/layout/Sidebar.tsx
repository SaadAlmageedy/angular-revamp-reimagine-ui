
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, Settings, FilePlus, Database } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-16 md:w-64 bg-sidebar border-r border-border flex flex-col transition-all duration-300">
      {/* Logo */}
      <div className="p-4 flex items-center justify-center md:justify-start">
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
          <img 
            src="/lovable-uploads/e83a2a16-52d8-4777-b1fc-b625659f48c3.png" 
            alt="DataScience Logo" 
            className="w-6 h-6 object-contain"
          />
        </div>
        <span className="ml-3 text-white font-semibold text-lg hidden md:inline">DataScience</span>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-1">
          <li>
            <Link 
              to="/query-builder"
              className="flex items-center text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-md p-3 transition-colors group"
            >
              <LayoutGrid className="w-5 h-5" />
              <span className="ml-3 hidden md:inline">Query Builder</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/rules"
              className="flex items-center text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-md p-3 transition-colors group"
            >
              <FilePlus className="w-5 h-5" />
              <span className="ml-3 hidden md:inline">Rules</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/fields"
              className="flex items-center text-sidebar-foreground bg-sidebar-accent rounded-md p-3 transition-colors group"
            >
              <Database className="w-5 h-5" />
              <span className="ml-3 hidden md:inline">Fields</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* Settings */}
      <div className="p-4 border-t border-sidebar-border/30">
        <Link
          to="/settings" 
          className="flex items-center text-sidebar-foreground/70 hover:text-sidebar-foreground rounded-md p-2 transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span className="ml-3 hidden md:inline">Settings</span>
        </Link>
      </div>
    </aside>
  );
};
