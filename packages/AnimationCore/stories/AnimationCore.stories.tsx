import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Loader from "../src/Loaders";

export default {
  title: "reactfe-core/AnimationCore",
  component: Loader
} as ComponentMeta<typeof Loader>;

const LoaderComponent: ComponentStory<typeof Loader> = (args) => (
  <div style={{
    width: "100vw",
    height: "100vh",
  }}>
    <Loader {...args} />
  </div>
  );

export const CircularLoader = LoaderComponent.bind({});
export const BarLoader = LoaderComponent.bind({});
export const LogoLoader = LoaderComponent.bind({});

CircularLoader.args = {
  isLoading: true,
  type: "circular",
  options: {
    diameter: "40px",
  }
};

BarLoader.args = {
  isLoading: true,
  type: "bar",
  options: {
    height: "5px",
  }
};

LogoLoader.args = {
  isLoading: true,
  type: "logo",
};
