'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const projects = [
  {
    name: 'Solar Farm Project',
    type: 'Renewable Energy',
    score: 92,
    investment: '$12.5M',
    status: 'Active',
  },
  {
    name: 'Green Building Initiative',
    type: 'Real Estate',
    score: 88,
    investment: '$8.2M',
    status: 'Active',
  },
  {
    name: 'Wind Power Plant',
    type: 'Renewable Energy',
    score: 90,
    investment: '$15.1M',
    status: 'Pending',
  },
  {
    name: 'Sustainable Agriculture',
    type: 'Agriculture',
    score: 85,
    investment: '$5.4M',
    status: 'Active',
  },
];

export function RecentProjects() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>ESG Score</TableHead>
          <TableHead>Investment</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.name}>
            <TableCell className="font-medium">{project.name}</TableCell>
            <TableCell>{project.type}</TableCell>
            <TableCell>{project.score}</TableCell>
            <TableCell>{project.investment}</TableCell>
            <TableCell>{project.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}