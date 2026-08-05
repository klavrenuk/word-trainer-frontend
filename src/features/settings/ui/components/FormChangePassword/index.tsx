'use client'

import { useState } from 'react'

import { Input, Button, Form, message } from 'antd'

import { changePassword } from '@/entities/user/api/userApi'

import type { FormPassword } from '@/features/settings'
import type { User } from '@/entities/user'

interface Props {
  user: User
}

const FormChangePassword = ({user}: Props) => {
  const [loading, setLoading] = useState(false)

  console.log('user', user)

    const handleChangePassword = async (values: FormPassword) => {
        setLoading(true)
        try {
            await changePassword(values.oldPassword, values.newPassword, user.id)
            message.success('Пароль успешно изменен')
        } catch (error) {
            console.error(error)
            message.error((error as Error).message || 'Ошибка при изменении пароля')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Form<FormPassword>
            layout="vertical"
            onFinish={handleChangePassword}
            className="w-full"
        >
            <Form.Item
                name="oldPassword"
                label={<span className="text-black">Старый пароль</span>}
          rules={[{ required: true, message: 'Введите старый пароль' }]}
            >
                <Input.Password placeholder="Введите старый пароль" />
            </Form.Item>

            <Form.Item
                name="newPassword"
                label={<span className="text-black">Новый пароль</span>}
                rules={[{ required: true, message: 'Введите новый пароль' }]}
            >
                <Input.Password placeholder="Введите новый пароль" />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-end">
                <Button type="primary" htmlType="submit" loading={loading}>
                    Изменить пароль
                </Button>
              </div>
            </Form.Item>
        </Form>
    )
}

export default FormChangePassword
