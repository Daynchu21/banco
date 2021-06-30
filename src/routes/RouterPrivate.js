import React from "react";

import { HashRouter, Redirect, Switch } from "react-router-dom";

import Dashboard from '../components/dashboard/dashboard.js'
import { EmptyLayout, LayoutRoute } from "../layout/index.js";

export const RouterPrivate = () => {
  return (
    <HashRouter>
      <Switch>
        <LayoutRoute  path="/home" layout={EmptyLayout} component={Dashboard} />
        {/* <Redirect  to="/home" /> */}
      </Switch>
    </HashRouter>
  );
};
