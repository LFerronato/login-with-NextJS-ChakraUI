import { Heading } from "@chakra-ui/react";
import { useSessionContext } from "../../contexts/SessionContext"

export default function Section2() {
  const { access } = useSessionContext()

  return (
    <Heading>{access}</Heading>
  )
}
