import React, { useEffect } from "react";
import "../App";
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Hiredrivers() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="Hiredrivers">
      <Navigation />
      <div className="hiredrivers-head">
        <div className="container-fluid">
          <div className=""></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
