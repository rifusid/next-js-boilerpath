'use client'

import { ConfigProvider as AntdConfigProvider, ConfigProvider, Select, theme as antdTheme } from 'antd'
import { useState } from 'react'
import baseTheme from '../theme/themeConfig'
import { themes, ThemeName } from '../theme/colorThemes'

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('blue')
  const [isDark, setIsDark] = useState(false)

  return (
    <AntdConfigProvider theme={{
      ...baseTheme,
      token: {
        ...baseTheme.token,
        ...themes[currentTheme],
      },
      algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm
    }}>
      <div className={`min-h-screen ${isDark ? 'bg-[#141414]' : 'bg-white'}`}>
        <div className="p-4 flex gap-3">
          <Select
            value={currentTheme}
            onChange={setCurrentTheme}
            options={[
              { label: 'Blue Theme', value: 'blue' },
              { label: 'Red Theme', value: 'red' },
              { label: 'Green Theme', value: 'green' },
            ]}
            style={{ width: 120 }}
          />
          <Select
            value={isDark ? 'dark' : 'light'}
            onChange={(value) => setIsDark(value === 'dark')}
            options={[
              { label: 'Light Mode', value: 'light' },
              { label: 'Dark Mode', value: 'dark' },
            ]}
            style={{ width: 120 }}
          />
        </div>
        {children}
      </div>
    </AntdConfigProvider>
  )
}