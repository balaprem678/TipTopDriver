import React from "react";
import "../App";
import Footer from "./Footer";
import Navigation from "./Navigation";
import joinbusiness from "../Images/joinbusiness.webp";
import ComfortableDrives from "../Images/Comfortable_Drives__QFknZ20U.webp";
import TrustedDrivers from "../Images/Trusted_Drivers_pr7rrCyii.webp";
import LikeDrivers from "../Images/Like_QF2-OpdJS.webp";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css";


export default function Joinasdriverpartner() {
  return (
    <div className="Joinasdriverpartner">
      <Navigation />
      <div>
        <div className="Joinasdriverpartner-head">
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
            <h2>Become a Driver Partner</h2>
            <p>DriveU is India's most popular on-demand private driver service provider. You can now become a driving partner on our platform and earn by driving our customers around in their own cars. We offer our services in and around Bangalore, Mysore, Hyderabad, Mumbai, Pune, Delhi NCR, Jaipur, Kanpur, Ahmedabad, Chennai, Coimbatore, Kochi, Palakkad, Thrissur, Kozhikode, Trivandrum & Kolkata.
            </p>
            <OwlCarousel
              className='owl-theme'
              responsive={{
                0: {
                  items: '1',
                },
                576: {
                  items: '2',
                },
                768: {
                  items: '3',
                },
                1000: {
                  items: '3',
                }
              }}
              autoPlay={true}
              autoplayHoverPause={true}
              nav={false}
              center
              dots={true}
              autoplaySpeed={1000}
              loop={true}
              margin={8}
            >
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-left">
                    <div class="image-wrap">
                      <h2>Incentives</h2>
                      <p>Make the most of DriveU special incentive schemes that run frequently to increase your earnings.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-up">
                    <div class="image-wrap">
                      <h2>Support</h2>
                      <p>We have a 24/7 support team to assist you with any kind of concerns.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-right">
                    <div class="image-wrap">
                      <h2>Driver Safety</h2>
                      <p>Your safety is important for DriveU. We provide personal accident insurance with benefits covering child education, hospitalization and EMI protection.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-left">
                    <div class="image-wrap">
                      <h2>Payment</h2>
                      <p>Instant live updates of your trip earnings are shown on your DriveU app. Choose from our flexible pay-out options - daily, weekly or monthly payment. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-up">
                    <div class="image-wrap">
                      <h2>The app</h2>
                      <p>Easy to use interface with accurate pick-up and drop location details along with features to track earnings, performance, future bookings to name a few.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-right">
                    <div class="image-wrap">
                      <h2>Referral</h2>
                      <p>Refer a friend and get paid ₹10 per trip completed by your friend for 30 days. We’ve noticed that Drivers earn up to ₹20,000 a month only via referrals!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-right">
                    <div class="image-wrap">
                      <h2>Easy Onboarding</h2>
                      <p>At DriveU, you are assessed, trained and on-boarded into our system, ready to drive people without investing in cars.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div>
                  <div className='mobile-view-1' data-aos="fade-right">
                    <div class="image-wrap">
                      <h2>Flexibility</h2>
                      <p>Our top Drivers earn up to ₹60,000 a month by spending only up to 8 hours a day on DriveU platform. We offer complete flexibility and you can check-in or out whenever you want.</p>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="Happy-drivers-happy-riders">
          <div className="container">
            <h2>Happy drivers, happy riders.</h2>
            <p class="svg-card-para">DriveU operates in all the major cities of India and works with 50,000+ well-trained professional drivers. DriveU is committed to help our driver partners become micro-entrepreneurs and increase their income. DriveU also strives to improve quality of life for its driver partners through training in etiquette, hygiene, service quality etc.</p>
          </div>
        </div>
        <div className="Join-as-a-Driver-Partner">
          <div className="container">
            <h3>Join as a Driver Partner</h3>
            <p>Download the DriveU Driver app on your Android phone for a seamless car driving job. Get new bookings, track all your transactions, refer your friends and earn incentives.</p>
            <div className='business-phoneno'>
              <input type="tel" id="phone" name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required placeholder="Enter Your Number" maxlength="10" size="30" />
              <a href=''><button className='app'>Submit</button></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
