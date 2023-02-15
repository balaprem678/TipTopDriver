import React from "react";
import {
  // BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Hiredrivers from "./components/Hiredrivers";
import Fastag from "./components/Fastag";
import Carwashpackage from "./components/Carwashpackage";
import Carwash from "./components/Carwash";

export default function Routeslist() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/" element={<Home />} />
          <Route path="/Hiredrivers" element={<Hiredrivers />} />
          <Route path="/Fastag" element={<Fastag />} />
          <Route path="/Carwashpackage" element={<Carwashpackage />} />
          <Route path="/Carwash" element={<Carwash/>} />
        </Routes>
      </HashRouter>
    </div>
  )
}