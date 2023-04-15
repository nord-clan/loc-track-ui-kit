import type { IPanelStoreParams } from '../../src';
import type { Meta, StoryFn } from '@storybook/react';
import { Panel, PanelStore } from '../../src';
import { useNewStore } from '../../src/helpers/stores';

const meta: Meta = {
  title: 'Components/Panel',
  component: Panel,
  argTypes: {
    side: {
      control: { type: 'select' },
      description: 'Side',
      options: ['left', 'right'],
      table: { type: { summary: "'left' | 'right'" }, defaultValue: { summary: 'right' } },
      defaultValue: 'right',
      type: 'string'
    },
    width: {
      control: { type: 'text' },
      description: 'Width',
      table: { type: { summary: 'string' } },
      defaultValue: '360px',
      type: 'string'
    },
    isOutsideClick: {
      control: { type: 'boolean' },
      description: 'Is outside click',
      table: { type: { summary: 'boolean' } },
      defaultValue: 'true',
      type: 'boolean'
    },
    delay: {
      control: { type: 'number' },
      description: 'Delay',
      table: { type: { summary: 'number' } },
      type: 'number'
    },
    isNotAnimate: {
      control: { type: 'boolean' },
      description: 'isNotAnimate',
      table: { type: { summary: 'boolean' } },
      type: 'boolean'
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

//* - Panel ---------------------------------------------------------------- *//

const Template: StoryFn<IPanelStoreParams> = ({ name, ...args }) => {
  const dependencies = Object.entries(args).map((f) => `${f[0].split('/')}: ${f[1]}`) as [];

  const store = useNewStore(PanelStore, args, dependencies);

  return (
    <>
      <button onClick={store.show}>Show</button>
      <button onClick={store.hide}>Hide</button>
      <Panel store={store} />
    </>
  );
};

export const Default = Template.bind({});
