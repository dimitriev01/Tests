import { AppDispatch, RootState } from 'app/store';
import { useDispatch, useSelector } from 'react-redux';
// исключение в рамках FSD
// eslint-disable-next-line boundaries/element-types

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
