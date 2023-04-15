import type { Meta, StoryFn } from '@storybook/react';

const App = () => <h1>Test App</h1>;

const meta: Meta = {
  title: 'Components/App',
  component: App,
  argTypes: {
    children: {}
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

//* - App ---------------------------------------------------------------- *//

const Template: StoryFn = () => {
  return <App />;
};

export const Default = Template.bind({});
