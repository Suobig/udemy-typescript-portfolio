import React from 'react'

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log(event)

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) =>
    console.log(`from: {x: ${event.pageX}, y: ${event.pageY}}`)

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(`to: {x: ${event.pageX}, y: ${event.pageY}}`)
  }

  return (
    <div>
      <input onChange={onChange} />
      <div
        draggable
        style={{ backgroundColor: 'blue', width: '100px', height: '100px' }}
        onDragStart={onDragStart}
        onDragEndCapture={onDragEnd}
      ></div>
    </div>
  )
}

export default EventComponent
