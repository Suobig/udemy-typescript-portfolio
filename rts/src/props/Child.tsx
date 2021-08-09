interface ChildProps {
  color: string
}

export const Child = (props: ChildProps) => {
  const { color } = props
  return <div style={{ color }}>Hi there!</div>
}
