import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;



// import React from 'react'
// import { Route, Switch } from 'react-router'
// import Home from '../components/Home'
// import Hello from '../components/Hello'
// import Counter from '../components/Counter'
// import NoMatch from '../components/NoMatch'
// import NavBar from '../components/NavBar'

// const routes = (
//   <div>
//     <NavBar />
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/hello" component={Hello} />
//       <Route path="/counter" component={Counter} />
//       <Route component={NoMatch} />
//     </Switch>
//   </div>
// )

// export default routes