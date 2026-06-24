'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { message } from 'antd'

import { login } from '@/widgets/auth'

import { setToken } from '@/shared/lib/auth'

import { Form, Input, Button } from 'antd'
import type { FormProps } from 'antd'
import type { FieldType } from './types'

const LoginForm = () => {
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const onSubmit: FormProps<FieldType>['onFinish'] = async values => {
        setLoading(true)

        try {
            const { access_token, error } = await login(values)
            

            if (error || !access_token) {
                throw new Error(error)
            }

            setToken(access_token)
            message.success('Вход выполнен')
            router.push('/')
        } catch (err) {
            console.error(err)
            message.error('Неверный логин или пароль')
        } finally {
            setLoading(false)
        }
    }

    const onSubmitFailed = (error: unknown) => {
        console.log('onSubmitFailed', error)
    }

    return (
        <Form
            className='form-label-text-black'
            layout='vertical'
            onFinish={onSubmit}
            onFinishFailed={onSubmitFailed}
        >
            <Form.Item
                label='Логин'
                name='login'
                rules={[{ required: true, message: 'Пожалуйста, введите логин!' }]}
            >
                <Input placeholder='Введите логин' />
            </Form.Item>
            <Form.Item
                label='Пароль'
                name='password'
                rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
            >
                <Input.Password placeholder='Введите пароль' />
            </Form.Item>
            <Form.Item>
                <Button
                    type='primary'
                    htmlType='submit'
                    block
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
