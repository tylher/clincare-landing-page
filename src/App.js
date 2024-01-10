import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

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
    </BrowserRouter>
  );
}

export default App;
