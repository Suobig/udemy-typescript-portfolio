import React, { FC, useState } from 'react'

import { useActions } from '../hook/useActions'

import s from './RepositoriesList.module.sass'

interface IProps {}

const RepositoriesList: FC<IProps> = () => {
  const [term, setTerm] = useState('')

  const { searchRepositories } = useActions()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchRepositories(term)
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
    </div>
  )
}

export default RepositoriesList
