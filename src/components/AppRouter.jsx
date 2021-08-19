import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router";
import {AuthContext} from '../components/context'
const AppRouter = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext)

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          exact={route.exact}
          path={route.path}
          key={route.path}
        />
      ))}

      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          exact={route.exact}
          path={route.path}
          key={route.path}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
