import React, { FC } from 'react'
import { Provider } from 'react-redux'

import { store } from '../state'
import RepositoriesList from './RepositoriesList/RepositoriesList'

const App: FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App
