import React from 'react';
import type { Preview } from "@storybook/react";
import '../app/globals.css';
import { ConfigProvider, Select, theme as antdTheme } from 'antd';
import baseTheme from '../app/theme/themeConfig';
import { themes, ThemeName } from '../app/theme/colorThemes';

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeName>('blue');

  return (
    <ConfigProvider theme={{
      ...baseTheme,
      token: {
        ...baseTheme.token,
        ...themes[currentTheme],
      },
      algorithm: antdTheme.darkAlgorithm
    }}>
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
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
      </div>
    </ConfigProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default preview; 