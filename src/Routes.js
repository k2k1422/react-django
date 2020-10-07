import React, { useEffect, useState } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  Login as LoginView,
  WelcomePage as WelcomePageView,
  DemoPage as DemoPageView
} from "./views";
import { Main as MainLayout } from "./layouts";

import { RouteWithLayout, PublicRoute } from "./components";

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/demoPage" />
        <RouteWithLayout
          component={DemoPageView}
          exact
          layout={MainLayout}
          path="/demoPage"
        />
        <PublicRoute component={LoginView} exact path="/login" />
        <PublicRoute component={WelcomePageView} exact path="/home" />
      </Switch>
    </div>
  );
};

export default Routes;
