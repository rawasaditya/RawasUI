import Container from "../components/Container/Container";
import Box from "../components/Box/Box";
import Flex from "../components/Layout/Flex";
export default {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select", defaultValue: "primary" },
    },
    maxW: {
      type: "string",
    },
    bg: {
      type: "string",
      value: "#0C2D57",
    },
    centerContent: {
      type: "boolean",
    },
    fluid: {
      type: "boolean",
    },
    color: {
      type: "string",
    },
    children: {
      type: "string",
    },
  },
};

const Content = () => {
  return (
    <Flex gap="5px">
      <Box bg="#2D82B7" h="80px" w="80px" />
      <Box bg="#42E2B8" h="80px" w="80px" />
      <Box bg="#f3dfbf" h="80px" w="80px" />
      <Box bg="#eb8a90" h="80px" w="80px" />
    </Flex>
  );
};

export const container = {
  args: {
    children: <Content />,
    bg: "#1A4182",
  },
};
