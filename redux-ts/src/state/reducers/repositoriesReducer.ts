import { IAction } from '../actions/config/respositories.config'

interface IState {
  data: string[]
  loading: boolean
  error: string
}

const defaultState = {
  data: [],
  loading: false,
  error: '',
} as IState

const repositoriesReducer = (
  state: IState = defaultState,
  action: IAction,
): IState => {
  switch (action.type) {
    case 'search_repositories':
      return {
        data: [],
        loading: true,
        error: '',
      }
    case 'search_repositories_success':
      return {
        data: action.payload,
        loading: false,
        error: '',
      }
    case 'search_repositories_error':
      return {
        data: [],
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default repositoriesReducer
