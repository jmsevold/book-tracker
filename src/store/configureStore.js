import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}

const store = configureStore();

export default store
