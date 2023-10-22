import TextField from "../components/TextField/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: [null, "sm", "lg"],
      control: { type: "select", selected: "contain" },
    },
    className: {
      type: "string",
      default: "w-half",
    },
    placeholder: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    rounded: {
      type: "boolean",
    },
  },
};

export const TextField = {
  args: {
    variants: "outlined",
    className: "w-half",
    placeholder: "Start typing here",
  },
};
