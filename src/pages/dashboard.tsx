import type { GetServerSideProps } from "next"
import { useState } from "react"
import { Flex } from "@chakra-ui/react"

import HeaderApplication from "../components/dash/HeaderApplication"
import Sidebar from "../components/dash/Sidebar"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies['token']

  // poderia - req api: /validate ...
  if (!token) {
    return { redirect: { destination: '/' }, props: {} }
  }

  return {
    // define as props da pagina
    props: {
    }
  }
}

export default function Dashboard() {
  const [bgColor, setBgColor] = useState('silver')

  return (
    <Flex>
      <Sidebar bgColor={bgColor} setBgColor={setBgColor} />

      <Flex>
        <HeaderApplication />
      </Flex>
    </Flex>
  )
}
