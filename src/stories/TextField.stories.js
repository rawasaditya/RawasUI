import TextField from "../components/TextField/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    variants: {
      options: ["outlined", "filled", "standard"],
      control: { type: "select", defaultValue: "primary" },
    },

    className: {
      type: "string",
    },
  },
};

export const Outlined = {
  args: {
    variants: "outlined",
  },
};

export const Filled = {
  args: {
    variants: "filled",
  },
};

export const Standard = {
  args: {
    variants: "standard",
  },
};
