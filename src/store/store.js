import { testimonialReducer } from "../store/reducers/testimonial.jsx";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const rootReducer = combineReducers({
  testimonialModule: testimonialReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(() => {});
