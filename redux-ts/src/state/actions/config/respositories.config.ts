interface ISearchAction {
  type: 'search_repositories'
}

interface ISearchSuccessAction {
  type: 'search_repositories_success'
  payload: string[]
}

interface ISearchErrorAction {
  type: 'search_repositories_error'
  payload: string
}

export type IAction = ISearchAction | ISearchSuccessAction | ISearchErrorAction
