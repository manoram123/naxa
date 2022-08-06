import {createStore, applyMiddleware} from 'redux'
import allReducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../reducers/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(allReducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;