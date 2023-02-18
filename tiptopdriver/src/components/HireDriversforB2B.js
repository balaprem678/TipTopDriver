import React from "react";
import "../App";
import Footer from "./Footer";
import Navigation from "./Navigation";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import v_img1 from "../Images/Hire Drivers for B2B/v-img1.webp"
import webp1 from "../Images/Hire Drivers for B2B/1.webp"
import webp2 from "../Images/Hire Drivers for B2B/2.webp"
import webp3 from "../Images/Hire Drivers for B2B/3.webp"
import webp4 from "../Images/Hire Drivers for B2B/4.webp"
import webp5 from "../Images/Hire Drivers for B2B/5.webp"
import webp6 from "../Images/Hire Drivers for B2B/6.webp"
import webp7 from "../Images/Hire Drivers for B2B/7.webp"
import webp8 from "../Images/Hire Drivers for B2B/8.webp"
import webp11 from "../Images/Hire Drivers for B2B/1 (1).webp"
import webp12 from "../Images/Hire Drivers for B2B/2 (1).webp"
import webp13 from "../Images/Hire Drivers for B2B/3 (1).webp"
import webp14 from "../Images/Hire Drivers for B2B/4 (1).webp"
import webp15 from "../Images/Hire Drivers for B2B/5 (1).webp"
import webp16 from "../Images/Hire Drivers for B2B/6 (1).webp"
import webp17 from "../Images/Hire Drivers for B2B/7 (1).webp"
import webp18 from "../Images/Hire Drivers for B2B/8 (1).webp"
import webp19 from "../Images/Hire Drivers for B2B/9.webp"
import webp20 from "../Images/Hire Drivers for B2B/10.webp"
import webp21 from "../Images/Hire Drivers for B2B/11.webp"
import webp22 from "../Images/Hire Drivers for B2B/12.webp"


export default function HireDriversforB2B() {
  return (
    <div className="HireDriversforB2B">
      <Navigation />
      <div>
        <div className="HireDriversforB2B-Head">
          <div className="container">
            <div className="HireDriversforB2B-center-heading">
              <div className="HireDriversforB2B-center-content">
                <h2>On-demand drivers for your<br /> business from DriveU</h2>
                <h6>Professional, background verified, trained, uniformed drivers</h6>
              </div>
              <div className="REQUEST-A-DEMO">
                <div className="card">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="head">
                        <img src={v_img1} />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                      <div className="head">
                        <h3>REQUEST A DEMO</h3>
                        <div className='right-form'>
                          <div className='google-inputs'>
                            <div className="google-input">
                              <form>
                                <input type="text" name="username" placeholder="Full Name" />
                              </form>
                            </div>
                          </div>
                          <div className='google-inputs'>
                            <div className="google-input">
                              <form>
                                <input type="text" name="Companyname" placeholder="Company Name" />
                              </form>
                            </div>
                          </div>
                          <div className='google-inputs'>
                            <div className="google-input">
                              <form>
                                <input type="text" name="Companyemail" placeholder="Company Email" />
                              </form>
                            </div>
                          </div>
                          <div className='google-inputs'>
                            <div className="google-input">
                              <form>
                                <input type="text" name="Companynumber" placeholder="Contact Number" />
                              </form>
                            </div>
                          </div>
                          <button className='form-btn'>Connect</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="client-logo-head">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={webp1} />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={webp2} />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={webp3} />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={webp4} />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={webp5} />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={webp6} />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={webp7} />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={webp8} />
              </div>
            </div>
          </div>
        </div>
        <div className="Product-Features">
          <div className="container">
            <div className="">
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
                    items: '4',
                  }
                }}
                autoPlay={true}
                autoplayHoverPause={true}
                nav={true}
                center
                dots={false}
                autoplaySpeed={1000}
                loop={true}
              >
                <div className='item'>
                  <div>
                    <div className='mobile-view-1' data-aos="fade-left">
                      <div class="image-wrap">
                        <a>
                          <img src={webp11} className="card-img-top" alt="..." />
                        </a>
                        <h4>World-Class Technology</h4>
                        <p>Built in-house by industry veterans, our world-class customizable technology supports many processes and businesses throughout the transportation industry.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div>
                    <div className='mobile-view-1' data-aos="fade-up">
                      <div class="image-wrap">
                        <a>
                          <img src={webp12} className="card-img-top" alt="..." />
                        </a>
                        <h4>Background Verified Drivers</h4>
                        <p>All drivers are thoroughly verified, and none with any cases are onboarded to ensure safety through and through.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div>
                    <div className='mobile-view-1' data-aos="fade-right">
                      <div class="image-wrap">
                        <a>
                          <img src={webp13} className="card-img-top" alt="..." />
                        </a>
                        <h4>Trained & Uniformed</h4>
                        <p>Drivers are continually trained through our in-app learning system on various subjects such as processes, hygiene and customer service. Our drivers also wear recognizable and professional uniforms to make the best impressions.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div>
                    <div className='mobile-view-1' data-aos="fade-left">
                      <div class="image-wrap">
                        <a>
                          <img src={webp14} className="card-img-top" alt="..." />
                        </a>
                        <h4>Trip Insurance</h4>
                        <p>Relax in knowing that your vehicle is protected from the madness of these roads. Get coverage from the time our drivers take the keys!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div>
                    <div className='mobile-view-1' data-aos="fade-up">
                      <div class="image-wrap">
                        <a>
                          <img src={webp15} className="card-img-top" alt="..." />
                        </a>
                        <h4>PPE And Sanitization Protocols</h4>
                        <p>All drivers follow safety procedures set out by the WHO, and are equipped with PPE and sanitizer for all touchpoints.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div>
                    <div className='mobile-view-1' data-aos="fade-right">
                      <div class="image-wrap">
                        <a>
                          <img src={webp16} className="card-img-top" alt="..." />
                        </a>
                        <h4>Custom Processes</h4>
                        <p>With our world-class technology, we are able to program and ensure processes of your business through each step of the booking.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div>
                    <div className='mobile-view-1' data-aos="fade-right">
                      <div class="image-wrap">
                        <a>
                          <img src={webp17} className="card-img-top" alt="..." />
                        </a>
                        <h4>On-Time & Fulfilment Guarantee</h4>
                        <p>With over 35,000 drivers on our platform, we can guarantee industry best SLAs to ensure top-notch customer experience and efficient operations that can handle any influx in volumes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div>
                    <div className='mobile-view-1' data-aos="fade-right">
                      <div class="image-wrap">
                        <a>
                          <img src={webp18} className="card-img-top" alt="..." />
                        </a>
                        <h4>Live Tracking</h4>
                        <p>We’ve all heard <i>“keep your customer informed”</i>, and we’re here to solve that with live-tracking visible to you and your customer or operations team.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div>
                    <div className='mobile-view-1' data-aos="fade-right">
                      <div class="image-wrap">
                        <a>
                          <img src={webp19} className="card-img-top" alt="..." />
                        </a>
                        <h4>Live Digital Checklist and Photos</h4>
                        <p>Not only can you track the location of your vehicle, but also view and track the condition of your vehicle at the start and the end of the trip.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div>
                    <div className='mobile-view-1' data-aos="fade-right">
                      <div class="image-wrap">
                        <a>
                          <img src={webp20} className="card-img-top" alt="..." />
                        </a>
                        <h4>Online Payment Management System</h4>
                        <p>Leave cash in the past and send a payment link directly to your customer from the DriveU dashboard!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div>
                    <div className='mobile-view-1' data-aos="fade-right">
                      <div class="image-wrap">
                        <a>
                          <img src={webp21} className="card-img-top" alt="..." />
                        </a>
                        <h4>Custom Analytics and Reports</h4>
                        <p>Track your team’s efficiency and performance with custom dashboards with rich up-to-the-second data, and detailed reports on a daily, weekly or monthly basis.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div>
                    <div className='mobile-view-1' data-aos="fade-right">
                      <div class="image-wrap">
                        <a>
                          <img src={webp22} className="card-img-top" alt="..." />
                        </a>
                        <h4>API Integrations</h4>
                        <p>Optimize your business by removing manual booking creation and other processes. Our APIs are simple to integrate and are a great option for any size business!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
