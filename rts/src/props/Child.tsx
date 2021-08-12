interface ChildProps {
  color: string
  onClick: () => void
}

//For typescript this is not a React component!
export const Child = (props: ChildProps) => {
  const { color, onClick } = props
  return (
    <div style={{ color }}>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}

export const ChildasFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div style={{ color }}>
      <div>{children}</div>
      <button onClick={onClick}>Click me!</button>
    </div>
  )
}
