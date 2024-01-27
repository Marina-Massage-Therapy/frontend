import { userReducer } from "../store/reducers/user.jsx";
import { testimonialReducer } from "../store/reducers/testimonial.jsx";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const rootReducer = combineReducers({
  userModule: userReducer,
  testimonialModule: testimonialReducer,
});

// Enhancers including the Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = []; // Add any middleware here

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(() => {
  // console.log('** Store state changed: **');
  // console.log('storeState:\n', store.getState());
  // console.log('***********');
});
