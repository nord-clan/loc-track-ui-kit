import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../src';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: 'string'
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

//* - App ---------------------------------------------------------------- *//

export const Default: Story = {
  args: {
    text: 'Default'
  }
};

export const Disabled: Story = {
  args: {
    text: 'Disabled'
  }
};
