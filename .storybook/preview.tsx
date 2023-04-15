import { Global } from '@emotion/react';
import React from 'react';
import { GlobalStyles } from './global.style';

// Default Setting
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  // Add Custom Background
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFFFFF'
      },
      {
        name: 'black',
        value: '#212121'
      }
    ]
  }
};

export const decorators = [
  (Story) => (
    <>
      <Global styles={GlobalStyles} />
      <Story />
    </>
  )
];
