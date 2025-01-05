'use client';

import { cn } from '@/lib/utils';
import {
  BarChart3,
  FileText,
  Home,
  LineChart,
  PieChart,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  {
    label: 'Overview',
    icon: Home,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Projects',
    icon: FileText,
    href: '/dashboard/projects',
    color: 'text-violet-500',
  },
  {
    label: 'Analytics',
    icon: BarChart3,
    href: '/dashboard/analytics',
    color: 'text-pink-700',
  },
  {
    label: 'ESG Metrics',
    icon: PieChart,
    href: '/dashboard/esg',
    color: 'text-orange-700',
  },
  {
    label: 'Portfolio',
    icon: LineChart,
    href: '/dashboard/portfolio',
    color: 'text-emerald-500',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400',
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}