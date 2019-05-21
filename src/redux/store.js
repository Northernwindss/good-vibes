import { combineReducers, createStore, applyMiddleWare } from 'redux';
import reducer from './reducer';
import profileReducer from './notInUseprofileReducer'


// const rootReducer = combineReducers({ reducer, profileReducer })

const store = createStore(reducer,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export default createStore(reducer);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// console.log('store', store.getState())

export default store