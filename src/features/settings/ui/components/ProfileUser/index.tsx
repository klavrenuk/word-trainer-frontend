'use client'

import { useState, useEffect } from 'react'

import type { User } from '@/entities'
import { fetchProfile } from '@/entities'

import { LogoutBtn } from '@/features/auth'
import { ProfileContent } from '@/features/settings'

import { FormChangePassword, TAB_LABELS, TAB_PROFILE, TAB_PASSWORD } from '@/features/settings'

import CardContainer from '@/shared/components/cards/CardContainer'

import { Tabs } from 'antd'

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

    const items = [
        {
            key: TAB_PROFILE,
            label: TAB_LABELS[TAB_PROFILE],
            children: <ProfileContent />
        },
        {
            key: TAB_PASSWORD,
            label: TAB_LABELS[TAB_PASSWORD],
            children: <FormChangePassword />
        }
    ]

    return (
        <CardContainer>
          <div className="flex flex-col gap-4">
            <Tabs activeKey={activeTab} onChange={setActiveTab} items={items} />

            <div className="flex">
                <LogoutBtn />
            </div>
           </div>
        </CardContainer>
    )
}

export default ProfileUser
