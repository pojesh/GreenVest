'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';
import { useState } from 'react';

export function ProjectUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    // Here we would handle the file upload and processing
    // For now, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setUploading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="projectName">Project Name</Label>
        <Input id="projectName" placeholder="Enter project name" required />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="projectType">Project Type</Label>
        <Input id="projectType" placeholder="e.g., Renewable Energy, Agriculture" required />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="proposal">Project Proposal (PDF)</Label>
        <div className="flex items-center gap-4">
          <Input
            id="proposal"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
          />
          <Button type="submit" disabled={!file || uploading}>
            <Upload className="mr-2 h-4 w-4" />
            {uploading ? 'Uploading...' : 'Upload'}
          </Button>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        <p>The PDF should include:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Project scope and objectives</li>
          <li>Budget breakdown</li>
          <li>Target demographic area</li>
          <li>Environmental impact assessment</li>
          <li>Social impact details</li>
          <li>Feasibility studies</li>
        </ul>
      </div>
    </form>
  );
}