'use client'

import { useState, useEffect } from 'react'

import type { UserProfile } from '@/entities/user'

import { Form, Input, Button } from 'antd'

import type { FormUserData } from '@/features/settings'

import { updateProfile } from '@/entities/user'

interface Props {
  user: UserProfile
}

const ProfileContent = ({user}: Props) => {
  const [name, setName] = useState<string>('')

  const handleChangePassword = (values: FormUserData) => {
    updateProfile({ id: user.id, name: values.name})
  }

  useEffect(() => {
    setName(user?.username || '')
  }, [user])


  return (
    <Form<FormUserData>
        layout="vertical"
        onFinish={handleChangePassword}
        className="w-full"
    >
      <Form.Item label={<span className="text-black">Имя</span>}>
        <Input
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full"
        />
      </Form.Item>

      <div className="mt-4 flex justify-end">
        <Button type="primary" htmlType="submit">Сохранить</Button>
      </div>
    </Form>
  )
}

export default ProfileContent
