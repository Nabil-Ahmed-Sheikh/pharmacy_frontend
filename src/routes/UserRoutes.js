import React, { lazy, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoutes = ({ component: Component, ...rest }) => {
  //const { userLogin } = useSelector((state) => state);

  let authFlag = false;
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo?.success && userInfo?.user) {
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
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    </>
  );
};

export default UserRoutes;
