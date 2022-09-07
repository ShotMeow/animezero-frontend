import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { TypeRootState } from '@/app/store/store'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
