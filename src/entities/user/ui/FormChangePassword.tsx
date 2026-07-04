'use client'

import { useState } from 'react'

import { Input, Button, Form, message } from 'antd'

import { changePassword } from '@/entities/user/api/userApi'

interface FormValues {
    oldPassword: string
    newPassword: string
}

const FormChangePassword = () => {
    const [loading, setLoading] = useState(false)

    const handleChangePassword = async (values: FormValues) => {
        setLoading(true)
        try {
            await changePassword(values.oldPassword, values.newPassword)
            message.success('Пароль успешно изменен')
        } catch (error) {
            console.error(error)
            message.error((error as Error).message || 'Ошибка при изменении пароля')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Form<FormValues>
            layout="vertical"
            onFinish={handleChangePassword}
            className="max-w-md"
        >
            <Form.Item
                name="oldPassword"
                label="Старый пароль"
                rules={[{ required: true, message: 'Введите старый пароль' }]}
            >
                <Input.Password placeholder="Введите старый пароль" />
            </Form.Item>

            <Form.Item
                name="newPassword"
                label="Новый пароль"
                rules={[{ required: true, message: 'Введите новый пароль' }]}
            >
                <Input.Password placeholder="Введите новый пароль" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} block>
                    Изменить пароль
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormChangePassword
