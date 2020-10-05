import {createStore } from 'redux';
import rootReducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools());
window.store = store;
// store.dispatch(tokenActions.setToken('1234567qwerty'))

export default store;