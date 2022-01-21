import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DashScreen from "./screens/DashScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/user/dashboard" element={<DashScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
