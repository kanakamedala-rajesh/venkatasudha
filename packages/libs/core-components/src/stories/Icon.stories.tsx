import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FaCode } from 'react-icons/fa';
import { Icon } from '../lib/Icon';

export default {
  component: Icon,
  title: 'Icon',
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'RK',
  icon: FaCode,
  linkURL: 'https://www.google.com/',
};
