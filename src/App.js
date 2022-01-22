import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./routes/Routes";
import "antd/dist/antd.css";
function App() {
  return (
    <>
      <Header />
      <div className="pageContainer">
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={Routes} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
