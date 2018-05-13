import React from "react";
import { Route, Redirect } from "react-router-dom";
import MapContainer from './MapContainer';

export default function PrivateRoute({
  component: Component,
  authenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/view-data" />
        )
      }
    />
  );
}