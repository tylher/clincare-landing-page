import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/"} element={<Home />} />
        <Route path="/about" />
        <Route path="/services" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
