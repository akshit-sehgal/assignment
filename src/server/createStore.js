import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../app/store/reducer';

const makeStore = () => (
    createStore(reducers, {}, applyMiddleware(thunk))
);
export default makeStore;