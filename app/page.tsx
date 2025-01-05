import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <main className="flex-1 flex items-center justify-center w-full">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                AI-Powered Green Finance Platform
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-300">
                Optimize your sustainable investments with advanced AI analytics and ESG scoring
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}