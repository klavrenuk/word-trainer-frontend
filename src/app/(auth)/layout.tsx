'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navLinks } from './constants'

import Card from '@/widgets/auth/ui/card/Card'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <div className='min-h-screen w-full bg-white flex items-center justify-center safety-auth-zone'>
            <div className='flex flex-col gap-4'>
                <Card>{children}</Card>

                <div className='flex items-center gap-4 justify-center'>
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`w-auto text-blue hover:underline ${pathname === link.path ? 'font-bold underline' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
