import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import UserRoutes from "./UserRoutes";
import UserDashBoard from "../components/Dashboard/UserDashBoard";

const Routes = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window?.location?.pathname]);

  const location = useLocation();

  return (
    <>
      <Switch>
        <>
          {location.pathname.includes("/signin") ||
          location.pathname.includes("/forgotpassword") ||
          location.pathname.match(new RegExp("/resetPassword", "gi")) ||
          location.pathname.includes("/signup") ? null : (
            <div className="index" style={{ paddingTop: "0px !important" }}>
              <Route exact path="/" component={HomeScreen} />
              <UserRoutes path="/user/" component={UserDashBoard} />
              {/* <Route path="/*" component={NotFoundScreen} /> */}
            </div>
          )}
        </>
      </Switch>
    </>
  );
};

export default Routes;
