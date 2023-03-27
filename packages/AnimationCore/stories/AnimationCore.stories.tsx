import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Loader from "../src/Loaders";
import { PrimarySearchPageComponent } from "../../SearchPage/stories/SearchPage.stories";

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

const LogoLoaderComponent: ComponentStory<typeof Loader> = (args) => (
  <div style={{
    width: "100vw",
    height: "100vh",
    textAlign: "center"
  }}>
    <div style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      overflow: "hidden"
    }}>
      <Loader {...args} />
    </div>
    <PrimarySearchPageComponent />
  </div>
);

export const CircularLoader = LoaderComponent.bind({});
export const BarLoader = LoaderComponent.bind({});
export const LogoLoader = LogoLoaderComponent.bind({});

CircularLoader.args = {
  isLoading: true,
  type: "circular",
  options: {
    diameter: 40,
  }
};

BarLoader.args = {
  isLoading: true,
  type: "bar",
  options: {
    height: 5,
  }
};

LogoLoader.args = {
  isLoading: true,
  type: "logo",
  options: {
    logoDiameter: 100
  }
};
