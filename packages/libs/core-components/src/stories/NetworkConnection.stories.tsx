import { ComponentMeta, ComponentStory } from '@storybook/react';
import NetworkConnectionIcon from '../components/networkConnection/NetworkConnection';

export default {
  component: NetworkConnectionIcon,
  title: 'NetworkConnectionIcon',
} as ComponentMeta<typeof NetworkConnectionIcon>;

const Template: ComponentStory<typeof NetworkConnectionIcon> = (args) => (
  <NetworkConnectionIcon {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  offlineColor: 'text-orange-500',
  onlineColor: 'text-blue-500',
};

export const Default = Template.bind({});
Default.args = {};
