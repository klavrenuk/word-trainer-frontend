'use client'

import { useState, useEffect } from 'react'

import type { User, UserProfile } from '@/entities/user'

import { fetchProfile } from '@/entities/user'

import { LogoutBtn } from '@/features/auth'
import { ProfileContent } from '@/features/settings'

import { saveUser } from '@/entities/user'

import { FormChangePassword, TAB_LABELS, TAB_PROFILE, TAB_PASSWORD } from '@/features/settings'

import CardContainer from '@/shared/components/cards/CardContainer'


import { Tabs } from 'antd'

const ProfileUser = () => {
    const [user, setUser] = useState<UserProfile | null>(null)
    const [activeTab, setActiveTab] = useState('profile')

    const loadProfile = () => {
      fetchProfile()
        .then((response: UserProfile) => {
            console.log('response', response)
            saveUser(response)
            setUser(response)
          })
        .catch((err) => {
          console.error(err)
          setUser(null)
          saveUser(null)
        })
    }

    useEffect(() => {
      loadProfile()
    }, [])

    const items = [
        {
            key: TAB_PROFILE,
            label: TAB_LABELS[TAB_PROFILE],
            children: <ProfileContent user={user} />
        },
        {
            key: TAB_PASSWORD,
            label: TAB_LABELS[TAB_PASSWORD],
            children: <FormChangePassword user={user} />
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
