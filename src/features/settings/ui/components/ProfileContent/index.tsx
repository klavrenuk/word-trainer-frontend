import { Form, Input, Button } from 'antd'

import type { FormUserData } from '@/features/settings'

const ProfileContent = () => {
  const handleChangePassword = (values: FormUserData) => {
    console.log(values)
  }

  return (
    <Form<FormUserData>
        layout="vertical"
        onFinish={handleChangePassword}
        className="w-full"
    >
      <Form.Item name="name" label={<span className="text-black">Имя</span>}>
        <Input placeholder="Имя" />
      </Form.Item>

      <div className="mt-4 flex justify-end">
        <Button type="primary" htmlType="submit">Сохранить</Button>
      </div>
    </Form>
  )
}

export default ProfileContent
