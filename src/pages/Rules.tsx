
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { Plus, AlertTriangle, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export const Rules = () => {
  // Sample data for rules
  const rules: any[] = [];

  return (
    <Layout>
      <PageHeader 
        title="Rules Configuration"
        description="Create and manage rules for your data processing"
      >
        <Button>
          <Plus className="h-4 w-4 mr-1" />
          New Rule
        </Button>
      </PageHeader>

      <div className="grid gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-medium mb-4">Add New Rule</h2>
            
            <div className="space-y-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="Enter rule name" />
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="id" className="text-sm font-medium">ID</label>
                <Input id="id" placeholder="Enter rule ID" />
              </div>
              
              <div className="bg-muted/40 rounded-lg p-4 border mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Rule Conditions</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Condition
                    </Button>
                    <Button variant="outline" size="sm">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Condition Group
                    </Button>
                  </div>
                </div>
                
                <Alert variant="destructive" className="mb-4">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  <AlertDescription>
                    A ruleset cannot be empty. Please add a rule or remove it altogether.
                  </AlertDescription>
                </Alert>
                
                <div className="bg-background rounded-md p-4 border">
                  <div className="flex items-center mb-2 space-x-2">
                    <Button variant="outline" size="sm">And</Button>
                    <Button variant="outline" size="sm">Or</Button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <Button variant="outline">Cancel</Button>
                <Button>Save Rule</Button>
              </div>
            </div>
          </div>
        </Card>
        
        <div>
          <h2 className="text-lg font-medium mb-4">Rules List</h2>
          <div className="bg-card rounded-lg border shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full data-table">
                <thead>
                  <tr>
                    <th className="w-16">ID</th>
                    <th>Name</th>
                    <th>Query</th>
                    <th className="w-24"></th>
                  </tr>
                </thead>
                <tbody>
                  {rules.length > 0 ? (
                    rules.map((rule) => (
                      <tr key={rule.id}>
                        <td>{rule.id}</td>
                        <td>{rule.name}</td>
                        <td>{rule.query}</td>
                        <td>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4}>
                        <div className="empty-state">
                          <p className="text-sm">No rules found</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="border-t p-3 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                0 results
              </div>
              <div className="flex items-center space-x-1">
                <Button variant="outline" size="icon" className="w-8 h-8 p-0" disabled>
                  <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="w-8 h-8 p-0" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm mx-2">Page 0 of 0</span>
                <Button variant="outline" size="icon" className="w-8 h-8 p-0" disabled>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="w-8 h-8 p-0" disabled>
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
