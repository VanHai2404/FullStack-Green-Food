import React from "react";
import InfoProductTop from "../Product/InfoProductTop";
import './SectionTopProduct.css'


const SectionTopProduct =()=>{
    return (
        <section id="gridTop">
          <div className="col-md-4 px-3">
            <div className="main-cont-white-bg">
              <div className="header5">
                <h5>Top Rated</h5>
                <a href="#">View All</a>
              </div>
               <InfoProductTop/>
               <InfoProductTop/>
               <InfoProductTop/>
            </div>
          </div>
          <div className="col-md-4 px-3">
            <div className="main-cont-white-bg">
              <div className="header5">
                <h5>Best Selling</h5>
                <a href="#">View All</a>
              </div>
              <InfoProductTop/>
              <InfoProductTop/>
              <InfoProductTop/>
            </div>
          </div>
          <div className="col-md-4 px-3">
            <div className="main-cont-white-bg">
              <div className="header5">
                <h5>On Sale</h5>
                <a href="#">View All</a>
              </div>
              <InfoProductTop/>
              <InfoProductTop/>
              <InfoProductTop/>
            </div>
          </div>
        </section>
      );


}
export default SectionTopProduct;