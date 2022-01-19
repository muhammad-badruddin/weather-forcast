import { createStore, applyMiddleware } from "redux"
// import { createSagaMiddleWare } from "redux-saga"
import reducers from './reducers'

const sagaMiddleWare = createSagaMiddleWare()
export const store = createStore(
    reducers,
    {},
    applyMiddleware(sagaMiddleWare)
)