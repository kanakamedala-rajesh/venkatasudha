import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CoreComponents } from '../lib/CoreComponents';
import '../styles/global.css';

export default {
  component: CoreComponents,
  title: 'CoreComponents',
} as ComponentMeta<typeof CoreComponents>;

const Template: ComponentStory<typeof CoreComponents> = (args) => (
  <CoreComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
