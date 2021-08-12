import { FC, useState, useEffect, useMemo, useRef } from 'react'

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 21 },
  { name: 'Michael', age: 19 },
]

const UserSearch: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [name, setName] = useState('')
  const [searchResult, setSearchResult] = useState<
    { name: string; age: number } | null | undefined
  >(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const onSearch = () => {
    const foundUser = users.find((user) => user.name.match(name))
    if (!foundUser) {
      setSearchResult(null)
    } else {
      setSearchResult(foundUser)
    }
  }

  const resultComponent = useMemo(() => {
    if (!searchResult) {
      return <div>No results</div>
    } else {
      const { name, age } = searchResult
      return (
        <div>
          <div>{name}</div>
          <div>{age}</div>
        </div>
      )
    }
  }, [searchResult])

  return (
    <div>
      <h3>User Search</h3>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
      {searchResult && <h3>Search result:</h3>}
      {resultComponent && <div>{resultComponent}</div>}
    </div>
  )
}

export default UserSearch
