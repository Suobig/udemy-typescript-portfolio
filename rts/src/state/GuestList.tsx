import React, { useState, useMemo, FC } from 'react'

const GuestList: FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])

  const onAddGuest = () => {
    setName('')
    setGuests([...guests, name])
  }

  const guestList = useMemo(
    () => guests.map((guest) => <li key={guest}>{guest}</li>),
    [guests],
  )

  return (
    <div>
      <h3>Guest List</h3>
      <ul>{guestList}</ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddGuest}>Add Guest</button>
    </div>
  )
}

export default GuestList
