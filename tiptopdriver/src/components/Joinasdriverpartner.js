import React from "react";
import "../App";
import Footer from "./Footer";
import Navigation from "./Navigation";
import joinbusiness from "../Images/joinbusiness.webp";
import ComfortableDrives from "../Images/Comfortable_Drives__QFknZ20U.webp";
import TrustedDrivers from "../Images/Trusted_Drivers_pr7rrCyii.webp";
import LikeDrivers from "../Images/Like_QF2-OpdJS.webp";


export default function Joinasdriverpartner() {
  return (
    <div className="Joinasdriverpartner">
      <Navigation />
      <div>
        <div className="Joinasdriverpartner">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='Hire-content'>
                  <h6 className='Hire-content-head2'>Looking for a Driver Job?</h6>
                  <h1 className='Hire-content-head3'>Earn up to ₹60,000 per month by driving cars</h1>
                  <h5 className='Hire-content-head4'>Work flexibly with zero investment. Own Car is not required, easy onboarding and daily payouts!</h5>
                  <div className='business-phoneno'>
                    <input type="tel" id="phone" name="phone"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      required placeholder="Enter Your Number" maxlength="10" size="30" />
                    <a href=''><button className='app'>Submit</button></a>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='Hire-img'>
                  <img src={joinbusiness} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Comfortable-Trusted-Customers">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <h2>5M+</h2>
                  <p>Comfortable Drives</p>
                  <img src={ComfortableDrives} />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <h2>50K+</h2>
                  <p>Trusted Drivers</p>
                  <img src={TrustedDrivers} />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card">
                  <h2>650K+ </h2>
                  <p>Happy Customers</p>
                  <img src={LikeDrivers} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Become-a-Driver-Partner">
          <div className="container">
            <div className=""></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
