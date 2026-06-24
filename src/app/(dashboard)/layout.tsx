'use client'

import { useRouter } from 'next/navigation'
import { ConfigProvider } from 'antd'
import classNames from 'classnames'
import { Roboto } from 'next/font/google'

import Aside from '@/shared/components/aside'

import { isAuthenticated } from '@/shared/lib/auth'

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap'
})

export default async function DashboardLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const router = useRouter()

    if (!isAuthenticated()) {
        return router.push('/login')
    }

    const bodyClasses = classNames('min-h-full flex flex-col', roboto.className)
    const antDesignTheme = {
        theme: {
            token: {
                fontFamily: roboto.style.fontFamily
            }
        }
    }

    return (
        <ConfigProvider {...antDesignTheme}>
            <div className={bodyClasses}>
                <div className='grid-body'>
                    <Aside />
                    <main>{children}</main>
                </div>
            </div>
        </ConfigProvider>
    )
}
