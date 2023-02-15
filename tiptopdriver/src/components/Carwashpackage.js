import React from 'react';
import '../App.css';
import Footer from './Footer';
import Navigation from './Navigation';

function Carwashpackage() {
  return (
    <div className="Carwashpackage">
      <Navigation/>
      <div className='container'>
        <div className='car-wash'>
          <h1>CAR WASH</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Carwashpackage;
