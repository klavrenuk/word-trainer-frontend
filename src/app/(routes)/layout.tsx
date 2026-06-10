'use client'

import { ReactNode } from 'react'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { checkAuth } from '@/entities'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
    const router = useRouter()

    useEffect(() => {
        checkAuth().then(({ isAuth }) => {
            if (!isAuth) {
                // router.push('/login')
            }
        })
    }, [])

    return <>{children}</>
}