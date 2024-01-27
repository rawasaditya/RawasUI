import Box from "../components/Box/Box";
import Flex from "../components/Layout/Flex";
export default {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    align: {
      type: "string",
    },
    justify: {
      type: "string",
    },
    direction: {
      options: ["row", "column", "column-reverse", "row-reverse"],
      control: { type: "select", defaultValue: "row" },
    },
    gap: {
      type: "string",
    },
    wrap: {
      type: "string",
    },
  },
};

const Content = () => {
  return (
    <>
      <Box bg="#2D82B7" h="80px" w="80px" />
      <Box bg="#42E2B8" h="80px" w="80px" />
      <Box bg="#f3dfbf" h="80px" w="80px" />
      <Box bg="#eb8a90" h="80px" w="80px" />
      <Box bg="#42E2B8" h="80px" w="80px" />
      <Box bg="#f3dfbf" h="80px" w="80px" />
      <Box bg="#42E2B8" h="80px" w="80px" />
      <Box bg="#f3dfbf" h="80px" w="80px" />
      <Box bg="#42E2B8" h="80px" w="80px" />
      <Box bg="#f3dfbf" h="80px" w="80px" />
    </>
  );
};

export const flex = {
  args: {
    children: <Content />,
    gap: "10px",
    wrap: "wrap",
  },
};
