// Image.stories.js

import React from "react";
import { Image } from "../components/Image";

export default {
  title: "Components/Image",
  parameters: {
    tags: ["autodocs"],
  },
  argTypes: {
    align: {
      control: { type: "select", options: ["left", "center", "right"] },
    },
    crossOrigin: {
      control: {
        type: "select",
        options: ["", "anonymous", "use-credentials"],
      },
    },
    fallbackSrc: {
      control: { type: "text" },
    },
    fit: {
      control: {
        type: "select",
        options: ["fill", "contain", "cover", "none", "scale-down"],
      },
    },
    htmlHeight: {
      control: { type: "text" },
    },
    htmlWidth: {
      control: { type: "text" },
    },
    ignoreFallback: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "select", options: ["eager", "lazy"] },
    },
    sizes: {
      control: { type: "text" },
    },
    src: {
      control: { type: "text" },
    },
    srcSet: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://pbs.twimg.com/profile_images/1657037114536542213/ZZ6N6qJ8_400x400.jpg",
  alt: "Placeholder Image",
};

export const WithFallback = Template.bind({});
WithFallback.args = {
  src: "nonexistent.jpg", // Intentionally provide a non-existent image URL to trigger fallback
  alt: "Fallback Image",
  fallbackSrc: "https://static.thenounproject.com/png/2932881-200.png",
};
