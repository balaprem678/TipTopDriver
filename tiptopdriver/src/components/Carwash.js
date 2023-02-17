import React from "react";
import "../App";
import Carwashed from '../Images/Carwash/Car_Wash_illustration_oPHa7gRLc.webp';
import Footer from "./Footer";
import Navigation from "./Navigation";
import shampoo from "../Images/Carwash/3M_Exterior_Shampoo_9WKaAQSHTy.webp"
import DashboardDresser from "../Images/Carwash/3M_Dashboard_Dresser_W5VKGszxEU.webp"
import BoschPressureWash from "../Images/Carwash/Bosch_Pressure_Wash_vlC_-HtSn3.webp"
import KentInteriorVacuum from "../Images/Carwash/Kent_Inteior_Vacuum_qiXCOvX2X3.webp"
import Carownership from "./Carownership";
import review from "../Images/Fastagpage/review.png"
import pressurefoam from "../Images/Carwash/pressure_foam_wash_BPHQNnsxR.webp"
import InteriorVaccum from "../Images/Carwash/Interior_Vaccum_HRQYmyFNV.webp"
import DashboardPolish from "../Images/Carwash/Dashboard_Polish_-rnJlIvuJ.webp"

export default function Carwash() {
  return (
    <div className="Carwash">
      <Navigation />
      <div className="Carwash-head">
        <div className="container-fluid">
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 carwash-content'>
              <div>
                <h6 className="Hire-content-head2">ESSENTIAL CAR WASH</h6>
                <h2 className="Hire-content-head3">Book a premium 60-min car wash at your doorstep</h2>
                <p className="Hire-content-head4">Pressure wash with powerful equipments,<span>starting at ₹349.</span> </p>
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
      <div className="Premium-Materials">
        <h2>Premium Materials Used</h2>
        <p>We use only premium industry-best products, carefully chosen for proper<br /> care of your car.  </p>
        <div className="container">
          <div className="Premium-Materials-head">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="card">
                  <img src={shampoo} />
                  <h3>3M Exterior<br />
                    Shampoo</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="card">
                  <img src={DashboardDresser} />
                  <h3>3M Dashboard<br />
                    Dresser</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="card">
                  <img src={BoschPressureWash} />
                  <h3>Bosch<br />
                    Pressure Wash</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="card">
                  <img src={KentInteriorVacuum} />
                  <h3>Kent Interior<br />
                    Vacuum</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='FASTag-Mandatory'>
        <div className='container'>
          <h1>What's Included</h1>
          <p>DriveU Car Wash is a transparent process where your exteriors and interiors are professionally cleaned.
          </p>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 fasttag-content'>
              <div>
                <h1>Pressure Foam Wash</h1>
                <p>A powerful Bosch pressure wash machine is used to clean your car effectively with water. Foam wash using 3M Shampoo gives you can a perfect shine by removing persistent dirt stains and marks from the body.</p>
                <ul>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Bosch pressure wash machine</li>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i>  Shampoo for foam</li>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Less than 2 buckets of water</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img src={pressurefoam} />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 '>
              <img src={InteriorVaccum} />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 fasttag-content'>
              <div>
                <h1>Power Interior Vacuum</h1>
                <p>Car interiors are cleaned with a high-quality powerful Kent vacuum machine that removes the majority of ingrained dust from the car seats and floors.</p>
                <ul>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Deep dust removal</li>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Powerful suction capacity</li>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Connects to an external AC source</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 fasttag-content'>
              <div>
                <h1>Tyre & Dashboard Polish</h1>
                <p>Dashboard dressing effectively restores gloss to plastic, vinyl and rubber surfaces and protects surfaces from UV rays & fading.</p>
                <ul>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> 3M products only</li>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Dashboards, Door Panels, Trims</li>
                  <li><i class="fa-sharp fa-regular fa-circle-check"></i> Restore tyre shine</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img src={DashboardPolish} />
            </div>
          </div>
        </div>
        <a className='Download-App' href=''><button>Download App</button></a>
      </div>
      <div className='reviews'>
        <div className='container'>
          <h1>Reviews</h1>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='card'>
                <img src={review} />
                <p>DriveU app saved my FASTag from getting blacklisted, I had totally forgotten to recharge it. On my trip, I used the app to recharge seamlessly and also earned cashback for this.</p>
                <p>Suryanarayan /<span>FASTag Recharge</span></p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='card'>
                <img src={review} />
                <p>DriveU’s weekend RSA plans are great. I was on my weekend trip to Pune when my vehicle broke down on the highway and called in for help, service guys were arranged swiftly.</p>
                <p>Abhishek / <span>Roadside Assistance</span></p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='card'>
                <img src={review} />
                <p>I found this amazing renewal offer on DriveU where I was able to save a good amount of money. The app experience and the flow was very smooth. Recommended.
                </p>
                <p>Partha/ <span>Insurance Renewal</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carownership />
      <Footer />
    </div>
  );
}
