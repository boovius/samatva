import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import logger from './middlewares/logger'
import synker from './middlewares/synker'

export default createStore(
  rootReducer,
  applyMiddleware(logger, synker)
)

