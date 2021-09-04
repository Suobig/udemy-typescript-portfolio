import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { IRootState } from '../../state'

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector

export default useTypedSelector
