'use client'

import { useRouter } from 'next/navigation'

import { removeToken } from '@/shared/lib/auth'

import { Button, message } from 'antd'

const LogoutButton = () => {
    const router = useRouter()

    const handleLogout = () => {
        removeToken()
        router.push('/login')
    }

    return (
      <Button
        className="w-full"
            danger
            onClick={handleLogout}
        >
          Выйти
        </Button>
    )
}

export default LogoutButton
