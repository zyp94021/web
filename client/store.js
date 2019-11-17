import { createStore } from 'redux'
import reducers from './reducers'
export default state => createStore(reducers, state)
