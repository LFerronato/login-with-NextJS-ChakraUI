import { Heading, Flex } from '@chakra-ui/react'
import FormLogin from '../components/forms/formLogin'

export default function Home() {
  return (
    <Flex flexDir="column" p="4" align="center">

      <Heading
        as="h1"
        my="4"
        color="blue.200"
        fontFamily="cursive"
      >
        Login Super Legal
      </Heading>

      <FormLogin />

    </Flex>
  )
}
