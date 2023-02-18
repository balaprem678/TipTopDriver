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
import Tiptopdrivercoin from "./components/Tiptopdrivercoin";
import Carservicing from "./components/Carservicing";
import Roadsideassistance from "./components/Roadsideassistance";
import Carownership from "./components/Carownership";
import Joinasdriverpartner from "./components/Joinasdriverpartner";
import HireDriversforB2B from "./components/HireDriversforB2B";

export default function Routeslist() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/" element={<Home />} />
          {/* SERVICES */}
          <Route path="/Hiredrivers" element={<Hiredrivers />} />
          <Route path="/Fastag" element={<Fastag />} />
          <Route path="/Carwashpackage" element={<Carwashpackage />} />
          <Route path="/Carownership" element={<Carownership />} />
          <Route path="/Carwash" element={<Carwash/>} />
          <Route path="/Tiptopdrivercoin" element={<Tiptopdrivercoin/>} />
          <Route path="/Carservicing" element={<Carservicing/>} />
          <Route path="/Roadsideassistance" element={<Roadsideassistance/>} />
          {/* Business */}
          <Route path="/Joinasdriverpartner" element={<Joinasdriverpartner/>} />
          <Route path="/HireDriversforB2B" element={<HireDriversforB2B/>} />

        </Routes>
      </HashRouter>
    </div>
  )
}