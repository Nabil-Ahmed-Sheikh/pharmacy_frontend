import React, { lazy, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import BlogSearchPage from "./components/Blogs/BlogSearchPage";
import SingleBlog from "./components/Blogs/SingleBlog";
import Main from "./components/Campaigns/SearchPage/Main";
import CharityResults from "./components/SearchResults/Charity/Main";
import Home from "./pages/Home";
import DonationCampaignView from "./components/Campaigns/User/CampaignViews/DonationCampaignView/DonationCampaignView";
import VolunteerCampaignView from "./components/Campaigns/User/CampaignViews/VolunteerCampaignView/VolunteerCampaignView";
import OrganizationPublicProfile from "./components/Profile/PublicProfile/OrgnaizationPublicProfile";
import BottomNav from "./components/BottomNav/BottomNav";
import AdminPrivateRoute from "./components/PrivateRoutes/AdminPrivateRoute";
import AdminRoutes from "./AdminRoutes";

const Header = lazy(() => import("./components/IndexShared/Header"));
const Footer = lazy(() => import("./components/Footer/footer"));

const OrganizationPrivateRoute = lazy(() =>
  import("./components/PrivateRoutes/OrganizationPrivateRoute")
);

const UserPrivateRoute = lazy(() =>
  import("./components/PrivateRoutes/UserPrivateRoute")
);

const OrganizationDashBoard = lazy(() =>
  import("./components/DashBoard/OrganizationDashBoard")
);

const UserDashBoard = lazy(() =>
  import("./components/DashBoard/UserDashBoard")
);

const AboutUs = lazy(() => import("./components/About-content/Goals/Goals"));
const Blogs = lazy(() => import("./components/Blogs/Blogs"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));

function Routes(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window?.location?.pathname]);
  return (
    <>
      <Switch>
        <>
          {props.location.pathname.includes("/signin") ||
          props.location.pathname.includes("/forgotpassword") ||
          props.location.pathname.match(new RegExp("/resetPassword", "gi")) ||
          props.location.pathname.includes("/signup") ? null : (
            <div className="index" style={{ paddingTop: "0px !important" }}>
              {!props.location.pathname.includes("/user/") &&
              !props.location.pathname.includes("/organization/") ? (
                <Header {...props} fixed={true} />
              ) : (
                <Header {...props} fixed={false} />
              )}
              <BottomNav />

              <Route exact path="/" component={Home} />
              <UserPrivateRoute path="/user/" component={UserDashBoard} />
              <OrganizationPrivateRoute
                path="/organization/"
                component={OrganizationDashBoard}
              />
              <Route exact path="/blogs" component={Blogs} />
              <Switch>
                <Route exact path="/blogs/search" component={BlogSearchPage} />
                <Route exact path="/blogs/:id" component={SingleBlog} />
              </Switch>

              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/how-it-works" component={HowItWorks} />
              <Route exact path="/campaign-results" component={Main} />
              <Route exact path="/charity-results" component={CharityResults} />
              <Route
                exact
                path="/donation-campaign/:id"
                component={DonationCampaignView}
              />
              <Route
                exact
                path="/organization-profile/:id"
                component={OrganizationPublicProfile}
              />
              <Route
                exact
                path="/volunteer-campaign/:id"
                component={VolunteerCampaignView}
              />
              {!props.location.pathname.includes("/organization/") &&
              !props.location.pathname.includes("/user/") ? (
                <Footer {...props} />
              ) : (
                ""
              )}
            </div>
          )}
        </>
      </Switch>
    </>
  );
}

export default Routes;
