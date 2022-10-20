import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import { RootState, AppDispatch } from './components/reduxToolkit'


export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector