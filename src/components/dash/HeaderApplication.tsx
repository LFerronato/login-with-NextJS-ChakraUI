import { Divider, Flex } from "@chakra-ui/react";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function HeaderApplication() {
  return (
    <Flex flexDir="column">
      <Section1 />
      <Divider borderBottomWidth="4px" borderColor="gray"/>
      <Section2 />
    </Flex>

  )
}
