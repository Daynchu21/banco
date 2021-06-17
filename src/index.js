import React from 'react';
import { render } from 'react-dom'
import todoApp from './reducers'
import Root from './rutas/roots'
import Login from "./components/login/login.jsx"
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store/configureStore'

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> { /* your usual react-router v4/v5 routing */ }
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
)
// ReactDOM.render(
//   <React.StrictMode>
//     <Login/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
