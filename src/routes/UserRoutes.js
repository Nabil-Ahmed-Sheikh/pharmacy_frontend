import React, { lazy, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const UserRoutes = ({ component: Component, ...rest }) => {
  // let authFlag = false;
  // if (
  //   rest.auth &&
  //   rest.auth.isAuthenticated &&
  //   rest.auth.user &&
  //   rest.auth.user.userType === "USER"
  // ) {
  //   authFlag = true;
  // }
  const authFlag = true;
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          authFlag ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        }
      />
    </>
  );
};

export default UserRoutes;
