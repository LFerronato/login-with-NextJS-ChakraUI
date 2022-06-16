import { Button } from "@chakra-ui/react"

type IProps = { text: string, handleClick?: any }
export default function ButtonNav(props: IProps) {
  return (
    <Button
      marginY="2"
      onClick = {() => props.handleClick(props.text)}
    >
      {props.text}
    </Button>
  )
}
