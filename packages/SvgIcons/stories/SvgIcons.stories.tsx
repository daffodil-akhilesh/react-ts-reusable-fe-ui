import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LeftArrowIcon from '../src/LeftArrowIcon';

export default {
  title: 'ReactFe-core/LeftArrowIcon',
  component: LeftArrowIcon,
} as ComponentMeta<typeof LeftArrowIcon>;

const Template: ComponentStory<typeof LeftArrowIcon> = (args) => <LeftArrowIcon {...args} />;

export const RedLeftArrow = Template.bind({});

RedLeftArrow.args = {
  height: "60px",
  width: "60px",
  color: "red",
}
