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
      control: { type: 'select', default: 'megenta' },
    },
    className: {
      type: "string"
    },
  },
};

export const Primary = {
  args: {
    child: 'Button',
    color: "primary"
  },
};

export const Secondary = {
  args: {
    child: 'Button',
    color: "secondary"
  },
};

export const Success = {
  args: {
    child: 'Button',
    color: "success"
  },
};

export const Info = {
  args: {
    child: 'Button',
    color: "info"
  },
};


export const Warning = {
  args: {
    child: 'Button',
    color: "warning"
  },
};


export const Danger = {
  args: {
    child: 'Button',
    color: "danger"
  },
};

export const Light = {
  args: {
    child: 'Button',
    color: "light"
  },
};

export const Dark = {
  args: {
    child: 'Button',
    color: "dark"
  },
};