import { ChildasFC } from './Child'

const Parent = () => {
  const buttonCallback = () => alert('Clicked!')
  return (
    <ChildasFC color="magenta" onClick={buttonCallback}>
      Some text
    </ChildasFC>
  )
}

export default Parent
