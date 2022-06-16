import { useState } from 'react'
import Link from 'next/link'
import { Flex, Input } from '@chakra-ui/react'

import { useSessionContext } from '../contexts/SessionContext'


export default function EditarCadastro() {
  const [inputValue, setInputValue] = useState('')

  const { changeName } = useSessionContext()

  return (
    <Flex flexDir="column">
      <h1>Teste</h1>
      <Input
        fontSize="xl"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
          changeName(e.target.value)
        }}
      />

      <Link href='/dashboard'>ir para dashboard</Link>
    </Flex>
  )
}
