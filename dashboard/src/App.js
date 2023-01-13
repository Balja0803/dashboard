import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Home from "./components/pages/Home";
import "../src/components/style/app.css";
import Products from "./components/pages/Products";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
