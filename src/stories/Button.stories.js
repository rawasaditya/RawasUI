import styles from '../public/stylesheets/button.module.css'
import Buttons from '../components/Buttons/Button';






// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction


export default {
  title: 'Example/Buttons',
  component: Buttons,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger',
        'light',
        'dark'
      ],
      control: { type: 'select', defaultValue: 'megenta' },
    },
    variant:{
      options: [
        'contain',
        'text',
        'outline',
      ],
      control: { type: 'select', defaultValue: 'contained' },
    },
    className: {
      type: "string"
    },
    rounded:{
      type:"boolean",
    }
  },
};

export const Primary = {
  args: {
    children: 'Button',
    color: "primary"
  },
};

export const Secondary = {
  args: {
    children: 'Button',
    color: "secondary"
  },
};

export const Success = {
  args: {
    children: 'Button',
    color: "success"
  },
};

export const Info = {
  args: {
    children: 'Button',
    color: "info"
  },
};


export const Warning = {
  args: {
    children: 'Button',
    color: "warning"
  },
};


export const Danger = {
  args: {
    children: 'Button',
    color: "danger"
  },
};

export const Light = {
  args: {
    children: 'Button',
    color: "light"
  },
};

export const Dark = {
  args: {
    children: 'Button',
    color: "dark"
  },
};