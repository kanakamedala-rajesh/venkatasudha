import { ComponentMeta, ComponentStory } from '@storybook/react';
import '../../styles/global.css';
import { H1 } from './H1.component';

export default {
  component: H1,
  title: 'H1',
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pageTitle: 'Home',
};
