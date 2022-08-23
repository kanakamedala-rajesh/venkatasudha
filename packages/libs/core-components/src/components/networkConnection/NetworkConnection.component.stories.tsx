import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NetworkConnection } from './NetworkConnection.component';

export default {
  component: NetworkConnection,
  title: 'NetworkConnectionIcon',
} as ComponentMeta<typeof NetworkConnection>;

const Template: ComponentStory<typeof NetworkConnection> = (args) => (
  <NetworkConnection {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  offlineColor: 'text-orange-500',
  onlineColor: 'text-blue-500',
};

export const Default = Template.bind({});
Default.args = {};
