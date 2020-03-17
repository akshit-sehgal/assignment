import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducer from './reducer';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(reducer, state, composeWithDevTools(applyMiddleware(thunk)));
export default store;