import allReducers from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
 import { createLogger } from 'redux-logger'

 const loggerMiddleware = createLogger()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preLoadedState) {
    return createStore(
        allReducers,
        preLoadedState,
        composeEnhancer(
            applyMiddleware( thunkMiddleware ,loggerMiddleware )
        )
    )
}