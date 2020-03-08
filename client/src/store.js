import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/root.reducer';

const initial_state = {};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initial_state,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
