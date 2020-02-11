import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROOT_PATH } from "../utils/contants";

const AuthRoute = ({
  component: Component,

  ...rest
}) => {
  const user = useSelector(state => state.user);
  return (
    <Route
      {...rest}
      render={props =>
        !user.authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROOT_PATH} />
        )
      }
    />
  );
};

export default withRouter(AuthRoute);
