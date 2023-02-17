import React from "react";
import "../App";
import Carownershiped from "../Images/Simplify_Car_Image__1__8QISsCRAL_.webp"
import appstore from "../Images/appstore.png"
import Googleplay from "../Images/googleplay.png"

export default function Carownership() {
  return (
    <div className='car-owner-ship'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-7 col-md-6 col-sm-12'>
            <img src={Carownershiped} />
          </div>
          <div className='col-lg-5 col-md-6 col-sm-12 carownership'>
            <div>
              <h2>Simplify Car Ownership</h2>
              <p>Download the DriveU app on iOS / Android phones for a seamless car ownership experience. Track all your bookings and get rewarded for every transaction.</p>
              <a href=''><img src={appstore} /></a>
              <a href=''><img src={Googleplay} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
