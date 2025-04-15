'use client'

import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { DatePicker } from './components/ui/DatePicker'
import { Input } from './components/ui/Input'
import { Space } from './components/ui/Space'
import { Title, Text } from './components/ui/Typography'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <Title level={1}>Welcome to Next.js with Ant Design</Title>
        <Text className="text-lg">A modern and beautiful UI framework for your Next.js applications</Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Component Showcase Card */}
        <Card title="Basic Components" className="shadow-md hover:shadow-lg transition-shadow">
          <Space direction="vertical" size="middle" className="w-full">
            <Button type="primary" block>Primary Button</Button>
            <Button block>Default Button</Button>
            <DatePicker className="w-full" />
            <Input placeholder="Type something..." />
          </Space>
        </Card>

        {/* Typography Card */}
        <Card title="Typography Examples" className="shadow-md hover:shadow-lg transition-shadow">
          <Space direction="vertical" size="small" className="w-full">
            <Title level={3}>Heading Example</Title>
            <Text>Regular text with <Text strong>bold</Text> and <Text italic>italic</Text> variations.</Text>
            <Text type="secondary">Secondary text</Text>
            <Text type="success">Success text</Text>
            <Text type="warning">Warning text</Text>
            <Text type="danger">Danger text</Text>
          </Space>
        </Card>

        {/* Feature Card */}
        <Card title="Features" className="shadow-md hover:shadow-lg transition-shadow">
          <Space direction="vertical" size="small" className="w-full">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">✓</div>
              <Text>Fully Responsive Design</Text>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">✓</div>
              <Text>Theme Customization</Text>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">✓</div>
              <Text>Modern Components</Text>
            </div>
          </Space>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <Text className="text-lg mb-4 block">Ready to get started?</Text>
        <Space size="middle">
          <Button type="primary" size="large">Get Started</Button>
          <Button size="large">Learn More</Button>
        </Space>
      </div>
    </main>
  )
}
