// import { createBrowserHistory } from 'history'
// import { applyMiddleware, compose, createStore } from 'redux'
// import { routerMiddleware } from 'connected-react-router'
// import createRootReducer from './reducers'
// export const history = createBrowserHistory()

// export default function configureStore(preloadedState) {
//   const store = createStore(
//     createRootReducer(history), // root reducer with router state
//     preloadedState,
//     compose(
//       applyMiddleware(
//         routerMiddleware(history), // for dispatching history actions
//         // ... other middlewares ...
//       ),
//     ),
//   )

//   return store
// }

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;