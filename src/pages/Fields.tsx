
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Plus, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, FileDown } from 'lucide-react';

export const Fields = () => {
  // Sample empty data
  const fields: any[] = [];

  return (
    <Layout>
      <PageHeader 
        title="Fields"
        description="Manage and organize your data fields"
      >
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <FileDown className="h-4 w-4 mr-1" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1" />
            New Field
          </Button>
        </div>
      </PageHeader>

      <div className="bg-card rounded-lg border shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full data-table">
            <thead>
              <tr>
                <th className="w-16">ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Reference List Name</th>
                <th className="w-24"></th>
              </tr>
            </thead>
            <tbody>
              {fields.length > 0 ? (
                fields.map((field) => (
                  <tr key={field.id}>
                    <td>{field.id}</td>
                    <td>{field.name}</td>
                    <td>{field.type}</td>
                    <td>{field.referenceListName}</td>
                    <td>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>
                    <div className="empty-state">
                      <div className="bg-muted/50 p-5 rounded-full">
                        <Database className="h-8 w-8 text-muted-foreground/70" />
                      </div>
                      <h3 className="mt-4 font-medium">No fields found</h3>
                      <p className="text-sm mt-2">Get started by creating a new field</p>
                      <Button className="mt-4" size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        New Field
                      </Button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="border-t p-3 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {fields.length} results
          </div>
          <div className="flex items-center space-x-1">
            <Button variant="outline" size="icon" className="w-8 h-8 p-0" disabled>
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8 p-0" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm mx-2">Page 1 of 1</span>
            <Button variant="outline" size="icon" className="w-8 h-8 p-0" disabled>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8 p-0" disabled>
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Import the lucide icon
import { Database } from 'lucide-react';
