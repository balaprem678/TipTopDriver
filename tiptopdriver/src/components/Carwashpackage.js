import React from 'react';
import '../App.css';
import Footer from './Footer';
import Navigation from './Navigation';

function Carwashpackage() {
  return (
    <div className="Carwashpackage">
      <Navigation />
      <div className='container'>
        <div className='car-wash'>
          <h1>CAR WASH</h1>
          <p>Choose from any of the below 3 plans:</p>
          <div className='card'>
            <div>
              <h2>Daily Wash</h2>
              <h3>999 per month</h3>
              <table>
                <tr>
                  <td>Exterior</td>
                  <td className='tdplace'>:</td>
                  <td>6 Days a week</td>
                </tr>
                <tr>
                  <td>Interior</td>
                  <td className='tdplace'>:</td>
                  <td>Once a week</td>
                </tr>
                <tr>
                  <td>Tyre Polish</td>
                  <td className='tdplace'>:</td>
                  <td>Once a week</td>
                </tr>
              </table>
              <a href=''><button>BUY PACKAGE</button></a>
            </div>
          </div>
          <div className='card'>
            <div>
              <h2>Alternate Day Wash</h2>
              <h3>799 per month</h3>
              <table>
                <tr>
                  <td>Exterior</td>
                  <td className='tdplace'>:</td>
                  <td>3 Days a week</td>
                </tr>
                <tr>
                  <td>Interior</td>
                  <td className='tdplace'>:</td>
                  <td>Once a week</td>
                </tr>
                <tr>
                  <td>Tyre Polish</td>
                  <td className='tdplace'>:</td>
                  <td>Once a week</td>
                </tr>
              </table>
              <a href=''><button>BUY PACKAGE</button></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Carwashpackage;
