'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus, Upload } from 'lucide-react';
import { ProjectUploadForm } from './project-upload-form';

export function NewProjectButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
          <DialogDescription>
            Upload a project proposal PDF and fill in the basic project details.
          </DialogDescription>
        </DialogHeader>
        <ProjectUploadForm />
      </DialogContent>
    </Dialog>
  );
}