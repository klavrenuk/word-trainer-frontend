'use client'

import { ConfigProvider } from 'antd'
import classNames from 'classnames'
import { Roboto } from 'next/font/google'

import { isAuthenticated } from '@/shared/lib/auth'

import Aside from '@/shared/components/aside'

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap'
})

interface DashboardLayoutProps {
    children: React.ReactNode
}

export const WidgetDashboard = ({ children }: DashboardLayoutProps) => {
    if (!isAuthenticated()) {
        return null
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
                    <main className="py-5 px-4">
                      <div className="container mx-auto">
                        {children}
                      </div>
                    </main>
                </div>
            </div>
        </ConfigProvider>
    )
}

export default WidgetDashboard
