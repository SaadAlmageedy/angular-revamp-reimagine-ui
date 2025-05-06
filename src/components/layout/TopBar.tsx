
import React from 'react';
import { Menu, Search, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TopBar = () => {
  return (
    <header className="h-16 px-4 border-b flex items-center justify-between bg-background">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="md:hidden mr-2">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="text-xl font-semibold">Fields</div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 bg-muted rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 w-64"
          />
        </div>
        
        <div className="flex items-center">
          <Button variant="ghost" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
              <User className="h-4 w-4" />
            </div>
            <span className="hidden md:inline">Admin</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
