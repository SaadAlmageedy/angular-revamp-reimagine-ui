
import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description,
  children 
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 pb-4 border-b">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      {children && (
        <div className="mt-4 sm:mt-0">
          {children}
        </div>
      )}
    </div>
  );
};
