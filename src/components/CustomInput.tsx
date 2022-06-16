import { useEffect, useRef } from 'react'
import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react'

type IProps = { initialFocus?: boolean; labelText: string } & InputProps

export default function CustomInput({ initialFocus = false, labelText, ...rest }: IProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (initialFocus) inputRef.current?.focus()
  }, [initialFocus])

  return (
    <FormControl>
      <FormLabel as="label" mt="2" fontSize="sm" color="gray">{labelText}</FormLabel>
      <Input
        ref={inputRef}
        {...rest}
      />
    </FormControl>
  )
}
