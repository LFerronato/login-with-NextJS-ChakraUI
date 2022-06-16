import { Heading } from "@chakra-ui/react";
import { useSessionContext } from "../../contexts/SessionContext"

export default function Section1() {
  const { name } = useSessionContext()

  return (
    <Heading>{name}</Heading>
  )
}
