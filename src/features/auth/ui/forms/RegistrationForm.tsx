'use client'

import { Form, Input, Button } from 'antd'
import type { FormProps } from 'antd'
import type { FormRegistration } from './types'

const RegistrationForm = () => {
    const onSubmit: FormProps<FormRegistration>['onFinish'] = values => {
        console.log('onSubmit', values)
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

export default RegistrationForm
