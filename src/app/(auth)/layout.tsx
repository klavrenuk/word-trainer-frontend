import Link from 'next/link'

import { navLinks } from './constants'

import Card from '@/features/auth/ui/card/Card'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center safety-auth-zone">
      <div className="flex flex-col gap-4">
        <Card>
          {children}
        </Card>

        <div className="flex items-center gap-4 justify-center">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className="w-auto text-blue hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
