'use client'

import { ConfigProvider as AntdConfigProvider, ConfigProvider, Select, theme as antdTheme } from 'antd'
import { useState } from 'react'
import baseTheme from '../theme/themeConfig'
import { themes, ThemeName } from '../theme/colorThemes'

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('blue')

  return (
    <AntdConfigProvider theme={{
      ...baseTheme,
      token: {
        ...baseTheme.token,
        ...themes[currentTheme],
      },
      algorithm: antdTheme.darkAlgorithm
    }}>
      <div className="p-4">
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
      </div>
      {children}
    </AntdConfigProvider>
  )
}   