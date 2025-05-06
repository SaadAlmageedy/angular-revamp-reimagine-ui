
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Save, Download, Upload, Plus } from 'lucide-react';

export const QueryBuilder = () => {
  return (
    <Layout>
      <PageHeader 
        title="Query Builder"
        description="Create and execute data queries"
      >
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-1" />
            Import
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Button size="sm">
            <Play className="h-4 w-4 mr-1" />
            Run Query
          </Button>
        </div>
      </PageHeader>

      <Tabs defaultValue="builder" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="builder">Visual Builder</TabsTrigger>
          <TabsTrigger value="sql">SQL Editor</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>
        
        <TabsContent value="builder">
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium">Data Sources</h2>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Source
                  </Button>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6 text-center border-2 border-dashed">
                  <p className="text-muted-foreground">
                    Add data sources to begin building your query
                  </p>
                  <Button className="mt-4" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Data Source
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-medium mb-4">Query Conditions</h2>
                <div className="flex space-x-3 mb-4">
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Condition
                  </Button>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Group
                  </Button>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6 text-center border-2 border-dashed">
                  <p className="text-muted-foreground">
                    No conditions added yet
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="sql">
          <Card>
            <CardContent className="p-6">
              <div className="bg-muted rounded-lg p-4 h-64 font-mono text-sm">
                <p className="text-muted-foreground">-- Write your SQL query here</p>
                <p>SELECT * FROM</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="results">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Run your query to see results</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};
