import React, { lazy, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoutes = ({ component: Component, ...rest }) => {
  const { userLogin } = useSelector((state) => state);

  let authFlag = false;
  if (userLogin?.userInfo?.success && userLogin?.userInfo?.user) {
    authFlag = true;
  }
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
