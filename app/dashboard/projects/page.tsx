import { ProjectList } from '@/components/projects/project-list';
import { NewProjectButton } from '@/components/projects/new-project-button';

export default function ProjectsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <NewProjectButton />
      </div>
      <ProjectList />
    </div>
  );
}