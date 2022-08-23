import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from './Navbar.component';

export default {
  component: Navbar,
  title: 'Navbar',
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args}>
    <ul className="flex space-x-4">
      <li className="text-primary hover:text-secondary cursor-pointer">Home</li>
      <li className="text-primary hover:text-secondary cursor-pointer">
        About
      </li>
      <li className="text-primary hover:text-secondary cursor-pointer">
        Education
      </li>
      <li className="text-primary hover:text-secondary cursor-pointer">Work</li>
      <li className="text-primary hover:text-secondary cursor-pointer">
        Skilld
      </li>
      <li className="text-primary hover:text-secondary cursor-pointer">
        Contact
      </li>
    </ul>
  </Navbar>
);

export const Primary = Template.bind({});
Primary.args = { iconString: 'Rajesh' };
