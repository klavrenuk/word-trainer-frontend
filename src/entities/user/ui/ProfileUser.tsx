'use client'

import { useState, useEffect } from 'react'

import type { User } from '@/entities'

import { fetchProfile, FormChangePassword, TAB_LABELS, TAB_PROFILE, TAB_PASSWORD } from '@/entities'

import { LogoutBtn } from '@/features/auth'

import { Input, Button, Tabs } from 'antd'

const ProfileUser = () => {
    const [user, setUser] = useState<User | null>(null)
    const [activeTab, setActiveTab] = useState('profile')

    const fetchProfileInfo = () => {
        fetchProfile()
            .then((response) => {
                console.log('response', response)
            })
    }

    useEffect(() => {
        fetchProfileInfo()
    })

    const profileContent = (
        <div>
            <div className="flex flex-col gap-4">
                <Input placeholder="Имя" />
            </div>

            <div className="mt-4">
                <Button type="primary">Сохранить</Button>
            </div>
        </div>
    )

    const passwordContent = <FormChangePassword />

    const items = [
        {
            key: TAB_PROFILE,
            label: TAB_LABELS[TAB_PROFILE],
            children: profileContent
        },
        {
            key: TAB_PASSWORD,
            label: TAB_LABELS[TAB_PASSWORD],
            children: passwordContent
        }
    ]

    return (
        <div>
            <Tabs activeKey={activeTab} onChange={setActiveTab} items={items} />

            <div className="mt-4">
                <LogoutBtn />
            </div>
        </div>
    )
}

export default ProfileUser
