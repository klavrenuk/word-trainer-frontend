import Link from 'next/link'

import { navLinks } from '@/constants/app'

const Aside = () => {
    return (
        <aside className="bg-gray-800 text-gray-200 w-full min-h-screen p-4 flex flex-col">
            <nav className="flex flex-col gap-4">
                {
                    navLinks.map((link) => (
                        <Link key={link.path} href={link.path} className='px-3 py-2 rounded hover:bg-gray-700 transition-color'>{link.name}</Link>
                    ))
                }
            </nav>
        </aside>
    )
}

export default Aside
