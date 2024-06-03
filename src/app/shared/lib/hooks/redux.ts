import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
// исключение в рамках FSD
// eslint-disable-next-line boundaries/element-types

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
