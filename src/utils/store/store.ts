import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { useDispatch } from 'react-redux'
import logger from 'redux-logger';
import rootReducer from './modules/index';

const store = createStore(
  rootReducer,
  //applyMiddleware(logger)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;