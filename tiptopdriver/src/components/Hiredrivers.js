import React, { useEffect } from "react";
import "../App";
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from "./Navigation";
import Footer from "./Footer";
import dropdowned from "../Images/DropDown-Icon_MPnhInvgo.webp"

export default function Hiredrivers() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="Hiredrivers">
      {/* <Navigation />
      <div className="hiredrivers-head">
        <div className="container">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="One-way">
              <div class="ba">
                <div data-baseweb="tab-list" role="tablist" aria-orientation="horizontal" class="bb b7 bc bd be bf">
                  <button data-baseweb="tab" id="tabs-bui310-tab-0" role="tab" aria-selected="true" aria-controls="tabs-bui310-tabpanel-0" tabindex="0" type="button" class="bg bh bi bj bk bl aj bm b6 bn bo bp bq br bs bt bu bv bw bx by bz c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 b1 ca cb cc cd ce b8">One Way
                  </button>
                  <button data-baseweb="tab" id="tabs-bui310-tab-1" role="tab" aria-selected="false" aria-controls="tabs-bui310-tabpanel-1" tabindex="-1" type="button" class="bg bh bi bj bk bl aj bm b6 bn bo bp bq br bs bt bu bv bw bx by bz c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 b1 ca cb cc cd ce b8">Round Trip
                  </button>
                  <div data-baseweb="tab-highlight" aria-hidden="true" role="presentation" class="cf cg ch ci cj ck fh cm cn">
                  </div>
                </div>
                <div data-baseweb="tab-border" aria-hidden="true" role="presentation" class="co bb ck"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12"></div>

          <form>
            <div className="oneWay">
              <div class="inputBox oneWayInputBox"><div class="location">
                <div class="first_Input_Tag_Div">
                  <input class="location first_Input_Tag" name="PickUpLocation" autocomplete="off" type="text" placeholder="Search Pickup Location" value="" />
                  <div class="empty_input_div">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
                <div className="Sorry-service">Sorry, service not available
                </div>
                <div className="Pick-up-and-drop-address">Pick up and drop address must be in the same city.
                </div>
                <div class="location secondInput">
                  <div class="second_Input_Tag_Div">
                    <input class="location second_Input_Tag" name="DropOffLocation" autocomplete="off" type="text" placeholder="Search Drop Location" value="" />
                    <div class="empty_input_div">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="must-be-in-the-same-city">Pick up and drop address must be in the same city.
                </div>
                <div className="not-available">Sorry, service not available</div>
              </div>
              <div>
                <div><div class="oneWayBottomDiv">
                  <div class="OneWayDateAndTime fontMedium">Date &amp; Time</div>
                  <div class="DataAndTimeInput">
                    <div class="Date">
                      <div style={{ width: '70%' }}>
                        <input placeholder="Select Date" class="dateInput" type="none" readonly="" value="Fri 17 Feb" />
                      </div>
                      <div class="dateDropDown">
                        <img height="5" width="10px" src={dropdowned} alt="arrow" />
                      </div>
                    </div>
                    <div class="Time">
                      <div data-baseweb="select" aria-haspopup="true" aria-expanded="false" class="b1 b2 b3 b4 aj bb cp">
                        <div class="cq cr cs ct aj cu cp b7 cv cw cx cy cz d0 au ax ao ar d1 c2 d2 bz d3 d4 d5 d6 d7" style={{ 'border-style': 'none solid', 'border-bottom-width': '0.2px', 'border-bottom-color': 'rgb(136, 136, 136)' }}>
                          <div class="aj bb cd d8 d9 b7 b6 bc cu da db dc dd">
                            <div aria-selected="true" value="11:30 AM" class="de aj df b9 dg cu dh di dj">11:30 AM</div>
                            <div class="bb ak dg dk bv bw bx by dl aj c4 bk bl df bj dm dn do dd dp dq">
                              <input aria-autocomplete="list" aria-expanded="false" aria-haspopup="listbox" aria-label="Selected 11:30 AM. Select a time, 12-hour format." role="combobox" tabindex="0" class="b1 b2 b3 b4 bz dr fg dg dt bv bw bx by dl ak c4 bk bl bi bj dm dn do dd" value="" inputmode="none" />
                              <div class="b1 b2 b3 b4 cg du dv dw dx dy dz">
                              </div>
                            </div>
                          </div>
                          <div class="aj bb b7 e0 b6 e1 e2">
                            <svg data-baseweb="icon" title="open" viewBox="0 0 24 24" class="ak e3 bz e4 e5">
                              <title>open</title>
                              <path d="M12.7071 15.2929L17.1464 10.8536C17.4614 10.5386 17.2383 10 16.7929 10L7.20711 10C6.76165 10 6.53857 10.5386 6.85355 10.8536L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929Z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="dateDiv" style="margin-top: 0.5rem;">
                    <div class="dateOption" style={{display: 'none'}}>Fri 17 Feb</div>
                    <div class="dateOption" style={{display: 'none'}}>Sat 18 Feb</div>
                    <div class="dateOption" style={{display: 'none'}}>Sun 19 Feb</div>
                    <div class="dateOption" style={{display: 'none'}}>Mon 20 Feb</div>
                    <div class="dateOption" style={{display: 'none'}}>Tue 21 Feb</div>
                  </div>
                  <div class="CarTypeBlock">
                    <div class="fontMedium" style={{color: 'rgb(136, 136, 136)'}}>Car Type</div>
                    <div class="CarType"><div data-baseweb="select" aria-haspopup="true" aria-expanded="false" class="b1 b2 b3 b4 aj bb cp">
                      <div class="cq cr cs ct aj cu cp b7 cv bg cx cy cz d0 au ax ao ar d1 c2 d2 bz d3 d4 d5 d6 d7" style={{border-style: 'none solid', color: 'rgb(102, 102, 102)'; background-color: white; border-bottom-width: 0.2px; border-bottom-color: rgb(136, 136, 136);">
                        <div class="aj bb cd d8 d9 b7 b6 bc cu da db dc dd">
                          <div aria-selected="true" value="#F0F8FF" class="b4 aj df b9 dg cu dh di dj">Manual</div>
                          <div role="listbox" aria-expanded="false" aria-disabled="false" aria-label="Selected Manual. " tabindex="0" class="bb ak dg dk bv bw bx by dl aj c4 bk bl df bj dm dn do dd e6 dq">
                            <input aria-hidden="true" tabindex="-1" style={{opacity: '0', width: '0px', overflow: 'hidden', border: 'none', padding: '0px', inputmode='none'}} />
                          </div>
                        </div>
                        <div class="aj bb b7 e0 b6 e1 e2">
                          <svg data-baseweb="icon" title="open" viewBox="0 0 24 24" class="ak e3 bz e4 e5"><title>open</title>
                            <path d="M12.7071 15.2929L17.1464 10.8536C17.4614 10.5386 17.2383 10 16.7929 10L7.20711 10C6.76165 10 6.53857 10.5386 6.85355 10.8536L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                      <div data-baseweb="select" aria-haspopup="true" aria-expanded="false" class="b1 b2 b3 b4 aj bb cp">
                        <div class="cq cr cs ct aj cu cp b7 cv bg cx cy cz d0 au ax ao ar d1 c2 d2 bz d3 d4 d5 d6 d7" style="border-style: none none solid; color: rgb(102, 102, 102); background-color: white; border-bottom-width: 0.2px; border-bottom-color: rgb(136, 136, 136);">
                          <div class="aj bb cd d8 d9 b7 b6 bc cu da db dc dd">
                            <div aria-selected="true" value="#7FFFD4" class="b4 aj df b9 dg cu dh di dj">Luxury</div>
                            <div role="listbox" aria-expanded="false" aria-disabled="false" aria-label="Selected Luxury. " tabindex="0" class="bb ak dg dk bv bw bx by dl aj c4 bk bl df bj dm dn do dd e6 dq" aria-activedescendant="bui613val-3">
                              <input aria-hidden="true" tabindex="-1" style="opacity: 0; width: 0px; overflow: hidden; border: none; padding: 0px;" inputmode="none" />
                            </div>
                          </div>
                          <div class="aj bb b7 e0 b6 e1 e2">
                            <svg data-baseweb="icon" title="open" viewBox="0 0 24 24" class="ak e3 bz e4 e5">
                              <title>open</title>
                              <path d="M12.7071 15.2929L17.1464 10.8536C17.4614 10.5386 17.2383 10 16.7929 10L7.20711 10C6.76165 10 6.53857 10.5386 6.85355 10.8536L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929Z">
                              </path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="CarTypeBlock coupanMainDiv">
                    <div class="fontMedium" style="color: rgb(136, 136, 136);">Coupon</div>
                    <div class="Coupon">
                      <input id="couponDiv" class="carDetailOption" type="text" placeholder="Enter a Coupon Code" autocomplete="off" />
                      <button>Verify</button>
                    </div>
                  </div>
                  <div style="display: none; color: red; margin-bottom: 0.5rem;">
                  </div>
                  <div class="InsuranceBlock" style="color: rgb(136, 136, 136); font-size: 12px; font-weight: 400; margin-bottom: 0.4rem; margin-top: 1rem; font-family: Circular-Std-Book;">SECURE YOUR BOOKING &nbsp;
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: green; font-size: 14px; cursor: pointer; font-family: Circular-Std-Book;">
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                    </svg>
                  </div>
                  <label data-baseweb="checkbox" class="bd b7 e7 bg e8">
                    <span class="e9 c2 d2 ea e5 e4 eb ec aj au ax ao ar ed ee ef eg hb hc hd he cq cr cs ct c4 ak el fv en eo ep eq er df es">
                    </span>
                    <input aria-checked="false" type="checkbox" class="et eu dx cu ev ew cg" value="" checked="" />
                    <div class="el ex ey ez f0 f1 f2 f3 f4">Get vehicle damage protection plan for your car for ₹15/- T&amp;C apply*</div>
                  </label><div style="display: none;">
                    <div style="color: rgb(136, 136, 136); font-size: 12px; font-weight: 400; text-align: center; margin-bottom: 0.5rem; font-family: Circular-Std-Book;">-----------<span style="margin-left: 1rem; margin-right: 1rem;">FARE ESTIMATE</span>-------------</div>
                    <div style={{ color: 'rgb(0, 133, 178)', fontsize: '30px', fontweight: '400', marginbottom: '0.5rem', textalign: 'center', fontfamily: 'Circular-Std-Book' }}>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: gray; font-size: 30px; cursor: pointer; padding-top: 0.4rem;">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                      </svg>
                    </div>
                    <div style={{ 'color': 'rgb(136, 136, 136)', 'font-size': '12px', 'font-weight': '400', 'text-align': 'center', 'margin-bottom': '0.5rem', 'margin-top': '0.5rem', 'font-family': 'Circular-Std-Book', 'padding-right': '1rem' }}>
                    </div>
                  </div>
                </div>
                  <div class="err-msg-text" style={{ 'font-family': 'Circular-Std-Book', 'margin-bottom': '0.5rem', 'margin-top': '0.5rem' }}>
                  </div>
                  <br />
                  <button data-baseweb="button" class="bm bd b6 b8 br bs bt bu bv bw bx by c4 dl f5 bh c1 c2 c3 bg c6 f6 c7 bi bk bj bl b1 b2 cb f7 f8 f9 fa fb fc fd bn bp b5 ae fe ff" style={{ 'width': '100%', 'borderradius': '0px', 'background-color': 'rgb(18, 126, 64)', 'color': 'rgb(255, 255, 255)', 'margin-top': '-1rem' }}>
                    <span class="RequestDriver">Request Driver</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer /> */}
    </div>
  );
}
