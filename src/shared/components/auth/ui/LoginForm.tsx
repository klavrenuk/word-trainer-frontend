'use client'

import { Form, Input, Button } from 'antd'

const LoginForm = () => {
    return (
        <Form>
            <Form.Item label="Логин">
                <Input placeholder="Введите логин" />
            </Form.Item>
            <Form.Item label="Пароль">
                <Input.Password placeholder="Введите пароль" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Войти</Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm