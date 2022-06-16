import { createContext, useContext, useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'

const SessionContext = createContext({} as any) // "any" temp.

export const SessionProvider = ({ children }: any) => {
  const [ name, setName ] = useState('')
  const [ access, setAccess ] = useState('')

  useEffect(() => {
    const name = parseCookies()['username']
    setName(name)
    const access = parseCookies()['access']
    setAccess(access)
  }, [])

  function changeName(newName: string) {
    setName(newName)
    setCookie(undefined, 'username', newName, {
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      path: '/', // quais rotas terão acesso - '/' => todas
    })
  }
  return (
    <SessionContext.Provider
      value={{ name, access, changeName }}
    >
      {children}
    </SessionContext.Provider >
  )
}

export const useSessionContext = () => useContext(SessionContext)
