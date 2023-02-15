import React from "react";
import "../App";
import Carwashed from '../Images/Carwash/Car_Wash_illustration_oPHa7gRLc.webp';
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Carwash() {
  return (
    <div className="Carwash">
      <Navigation />
      <div className="Carwash-head">
        <div className="container-fluid">
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 carwash-content'>
              <div>
                <h6>ESSENTIAL CAR WASH</h6>
                <h2>Book a premium 60-min car wash at your doorstep</h2>
                <p>Pressure wash with powerful equipments,<span>starting at ₹349.</span> </p>\
                <div className='driver-app'>
                  <a href=''><button>Book Driver</button></a>
                  <a href=''><button className='app'>Download App</button></a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img src={Carwashed} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
