'use client'

import { useState, useEffect } from 'react'

import type { User } from '@/entities'

import { fetchProfile } from '@/entities'

import { LogoutBtn } from '@/features/auth'

import { Input, Button } from 'antd'

const ProfileUser = () => {
    const [user, setUser] = useState<User | null>(null)

    const fetchProfileInfo = () => {
        fetchProfile()
            .then((response) => {
                console.log('response', response)
            })
    }

    useEffect(() => {
        fetchProfileInfo()
    })

    return (
        <div>
            <div className="flex flex-col gap-4">
                <Input placeholder="Имя" />
            </div>

            <div>
                <Button type="primary">Сохранить</Button>
                <LogoutBtn />
            </div>
        </div>
    )
}

export default ProfileUser