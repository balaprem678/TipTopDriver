import React from 'react';
import '../App.css';
import logo from "../Images/logo.png"
import appstore from "../Images/appstore.png"
import Googleplay from "../Images/googleplay.png"


function Footer() {
  return (
    <div className="Footer">
      <div className='footer-head'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2 col-md-4 col-6'>
              <a href=''><img src={logo} /></a>
              <br />
              <h2>Follow Us</h2>
              <p>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-youtube"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </p>
            </div>
            <div className='col-lg-2 col-md-4 col-6'>
              <h3>About</h3>
              <p>
                <a href=''>Team </a><br />
                <a href=''>Blog</a><br />
                <a href=''>Contact Us</a><br />
                <a href=''>Chat with us</a><br />
              </p>
            </div>
            <div className='col-lg-2 col-md-4 col-6'>
              <h3>Services</h3>
              <p>
                <a href=''>Hire a Driver</a><br />
                <a href=''>Hire a Temporary Driver</a><br />
                <a href=''>Hire Hourly Drivers</a><br />
                <a href=''>Hire Chauffeurs</a><br />
                <a href=''>DriveU Offers</a><br />
                <a href=''>DriveU Black</a><br />
              </p>
            </div>
            <div className='col-lg-2 col-md-4 col-6'>
              <h3>For Business </h3>
              <p>
                <a href=''>Hire Drivers For B2B</a><br />
                <a href=''>Join as Driver Partner</a><br />
              </p>
            </div>
            <div className='col-lg-2 col-md-4 col-6'>
              <h3>Cities</h3>
              <p>
                <a href=''>Ahmedabad </a><br />
                <a href=''>Bangalore</a><br />
                <a href=''>Chennai</a><br />
                <a href=''>Delhi NCR</a><br />
                <a href=''>Hyderabad</a><br />
                <a href=''>Kolkata</a><br />
                <a href=''>Mumbai</a><br />
                <a href=''>Pune</a><br />
              </p>
            </div>
            <div className='col-lg-2 col-md-4 col-6'>
              <h3>Compare</h3>
              <p>
                <a href=''>Ezi Drive</a><br />
                <a href=''>Hire4drive</a><br />
                <a href=''>Top4 Call Drivers</a><br />
                <a href=''>Driversindia</a><br />
                <a href=''>Driversonhire</a><br />
                <a href=''>Suryadrive</a><br />
              </p>
            </div>
          </div>
          <div className='terms-condition'>
            <div className='row'>
              <div className='col-lg-8 col-md-4 col-sm-12'>
                <h4>Terms & Conditions | Privacy Policy</h4>
                <p>
                  © Humble Mobile Solutions Pvt. Ltd. All Rights Reserved<br />
                  112, 17th Main Rd, 5th Block, Koramangala, Bengaluru, Bengaluru Urban, Karnataka 560095.<br /> All Rights Reserved.
                </p>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-12'>
                <div className='footer-app'>
                  <a href=''><img src={appstore} /></a>
                  <a href=''><img src={Googleplay} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
