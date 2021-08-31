import axios from 'axios'
import { Dispatch } from 'redux'
import { IAction } from './config/respositories.config'

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    dispatch({
      type: 'search_repositories',
    })

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        },
      )
      const repositories = data.objects.map((item: any) => item.package.name)
      dispatch({
        type: 'search_repositories_success',
        payload: repositories,
      })
    } catch (error) {
      dispatch({
        type: 'search_repositories_error',
        payload: error.message,
      })
    }
  }
}
