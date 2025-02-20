'use client'

import { Typography, Space } from 'antd'
import { Button } from './components/ui/Button'
import { DatePicker } from './components/ui/DatePicker'

const { Title } = Typography

export default function Home() {
  return (
    <main className="p-24">
      <Title level={2}>Ant Design di Next.js</Title>
      <Space direction="vertical" size={16}>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <DatePicker />
      </Space>
    </main>
  )
}
