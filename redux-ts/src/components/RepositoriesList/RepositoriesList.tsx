import React, { FC, useState } from 'react'

import { useActions } from '../hooks/useActions'

import s from './RepositoriesList.module.sass'
import useTypedSelector from '../hooks/useTypedSelector'

interface IProps {}

const RepositoriesList: FC<IProps> = () => {
  const [term, setTerm] = useState('')

  const { searchRepositories } = useActions()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchRepositories(term)
  }

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories,
  )

  const Results: FC = () => {
    if (error) {
      return <h3>{error}</h3>
    }
    if (loading) {
      return <h3>Loading...</h3>
    }

    return (
      <ul>
        {data.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    )
  }

  return (
    <div className={s.root}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="term"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Results />
    </div>
  )
}

export default RepositoriesList
