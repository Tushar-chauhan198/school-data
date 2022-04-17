import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Loginreducer } from "./Login/reducer";
import { TodosReducer } from "./Todos/reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middleware = [thunk]; // we can add more middle by [thunk, middleware1, middleware2];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware), // spreading the array here
  // other store enhancers if any
);

const rootReducer = combineReducers({
  
  login: Loginreducer, 
  todos: TodosReducer, 
});

export const store = createStore(rootReducer, enhancer);

