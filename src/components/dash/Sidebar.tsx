import { Flex } from "@chakra-ui/react";

import ButtonNav from "./button";

export default function Sidebar(props: any) {
  return (
    <Flex
      bg={props.bgColor}
      w={'fit-content'}
      p="2"
      h={'100vh'}
    >
      <Flex flexDirection={'column'}>
        <ButtonNav text="blue" handleClick={props.setBgColor} />
        <ButtonNav text="red" handleClick={props.setBgColor} />
      </Flex>
    </Flex>
  )
}
