import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from './saga';
import rootReducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

middlewares.push(sagaMiddleware);

let middleware = applyMiddleware(...middlewares);

const state = createStore(rootReducers, composeEnhancers(middleware));
sagaMiddleware.run(rootSaga);

export { 
    state 
};