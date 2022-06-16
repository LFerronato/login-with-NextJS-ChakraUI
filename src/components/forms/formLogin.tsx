import { FormEvent, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { Flex, Button, useToast } from "@chakra-ui/react"

import { api } from "../../services/api"
import CustomInput from "../CustomInput"

export default function FormLogin() {
  const toast = useToast()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: FormEvent<HTMLDivElement>) {
    e.preventDefault()

    setLoading(true)

    api.post('/auth/login', {
      // @ts-ignore
      user: e.target[0].value,
      // @ts-ignore
      pwd: e.target[1].value,
    })
      .then((req) => {
        console.log(req.data.token)
        toast({
          title: 'Ebaa!!',
          description: 'Você está sendo redirecionado.',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top'
        })
        router.push('/dashboard')
      })
      .catch((err) => {
        toast({
          title: 'Ops...',
          description: err.response.data.message,
          status: 'warning',
          duration: 2000,
          isClosable: true,
          position: 'top'
        })
        setLoading(false)
        console.error(err.response.data.message)
      })
  }

  return (
    <Flex
      as="form"
      flexDir="column"
      border="1px solid"
      borderColor="gray.200"
      shadow="md"
      borderRadius="md"
      p="4"
      onSubmit={handleSubmit}
    >
      {/* Image do NextJS - otimizada */}
      <Image src="/vercel.svg" width="60px" height="30px" alt="logo" />

      <Flex flexDir="column" my="4">
        <CustomInput labelText="Usuário:" type="text" isRequired initialFocus isDisabled={loading} />
        <CustomInput labelText="Senha:" type="password" isRequired isDisabled={loading} />
      </Flex>

      <Button
        type="submit"
        variant="solid"
        colorScheme="blue"
        marginY="4" // 1rem
        isLoading={loading}
      >
        Login
      </Button>

    </Flex>
  )
}
