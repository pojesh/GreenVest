'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';

type Project = {
  id: string;
  name: string;
  type: string;
  score: number;
  budget: string;
  status: 'Active' | 'Pending' | 'Completed';
  impact: {
    environmental: number;
    social: number;
    governance: number;
  };
};

const projects: Project[] = [
  {
    id: '1',
    name: 'Solar Farm Project',
    type: 'Renewable Energy',
    score: 92,
    budget: '$12.5M',
    status: 'Active',
    impact: {
      environmental: 95,
      social: 88,
      governance: 90,
    },
  },
  {
    id: '2',
    name: 'Green Building Initiative',
    type: 'Real Estate',
    score: 88,
    budget: '$8.2M',
    status: 'Active',
    impact: {
      environmental: 85,
      social: 92,
      governance: 87,
    },
  },
  {
    id: '3',
    name: 'Wind Power Plant',
    type: 'Renewable Energy',
    score: 90,
    budget: '$15.1M',
    status: 'Pending',
    impact: {
      environmental: 93,
      social: 85,
      governance: 89,
    },
  },
  {
    id: '4',
    name: 'Sustainable Agriculture',
    type: 'Agriculture',
    score: 85,
    budget: '$5.4M',
    status: 'Completed',
    impact: {
      environmental: 88,
      social: 90,
      governance: 82,
    },
  },
];

export function ProjectList() {
  const [sortField, setSortField] = useState<keyof Project>('score');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortedProjects = [...projects].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return sortDirection === 'asc' 
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  const toggleSort = (field: keyof Project) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/10 text-green-500 hover:bg-green-500/20';
      case 'Pending':
        return 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20';
      case 'Completed':
        return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20';
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => toggleSort('score')}
                className="h-8 flex items-center gap-1"
              >
                ESG Score
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => toggleSort('budget')}
                className="h-8 flex items-center gap-1"
              >
                Budget
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => toggleSort('status')}
                className="h-8 flex items-center gap-1"
              >
                Status
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>{project.type}</TableCell>
              <TableCell>{project.score}</TableCell>
              <TableCell>{project.budget}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}