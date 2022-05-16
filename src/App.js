import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./routes/Routes";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="pageContainer">
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={Routes} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
