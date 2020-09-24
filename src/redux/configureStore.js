import {createStore, compose, applyMiddleware} from 'redux';

import rootReducers from './../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {

    const store = createStore(
      rootReducers,
        composeEnhancers(applyMiddleware())
      );
      return store;
}

export default configureStore;