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
      <Switch>
        <Route path="/" component={Routes} />
        <Route exact path="/login" component={LoginScreen} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
