import Link from 'next/link';
import { Bot } from 'lucide-react';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-6 border-b">
      <div className="container mx-auto flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Bot className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold tracking-tight">
            RoboLearn
          </span>
        </Link>
      </div>
    </header>
  );
}
