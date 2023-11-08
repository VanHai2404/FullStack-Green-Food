import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './products-listing.css'
import SelectBox from '../../../components/ProductFilter/SelectBox';
import ProductFilter from '../../../components/ProductFilter';
import InfoProductList from '../../../components/Product/infoProductList';
import PaginationRounded from '../../../components/Pagination/PaginationRounded';
const Products_Listing = () => {

  return (
    <div style={{ backgroundColor: ' rgb(255, 255, 255)', minWidth: '100vh' }}>
      <div className="page--body d-flex me-0">
        <div className="filterT2-container px-3">
          <div className="filters_full  pt-2">
            <div className="d-flex mt-lg-1 mt-xl-0">
              <div style={{ fontSize: "15px", float: "left", width: "60%", margin: "0", padding: "0", marginLeft: "auto", fontWeight: "800", color: "#000" }}>Filter By </div>
              <div style={{ margin: "auto", width: "40%", textAlign: "right" }}>
                <button className="clear btn  ps-0 pe-0" style={{ outline: "0", margin: "0", padding: "0", boxShadow: "0", fontSize: "16px", textDecoration: "underline", color: "blue" }}> Clear </button>
              </div>
            </div>
            <ProductFilter />


          </div>
          </div>
          <div className="cp_full_width mx-auto grid_layout">
            <section className="sortByStrip pt-2 mb-3" style={{ borderBottom: "1px solid #f0f0f0" }}>
              <div className="showing-products"> Hiển thị 195 sản phẩm </div>

              <div className="sort-by-last">
                <span className="sort-span">Sort by</span>
                <div className="d-none d-lg-flex align-items-center sortBy">
                  <SelectBox />
                </div>

              </div>
            </section>
            <div className="cp_full_width">
              <div className="row new-listing" style={{ width: "100%", margin: "0 auto", minHeight: "80vh" }}>
                <div style={{
                  display: "grid",
                  columnCount: 4,
                  gap: "0px",
                  padding: "0px",
                  margin: "0%",
                  gridTemplateColumns: "auto auto auto auto"
                }}>
                  <InfoProductList />
                  <InfoProductList />
                  <InfoProductList />
                  <InfoProductList />
                  <InfoProductList />


                </div>

              </div>
              <div className="row" style={{height:'50px',alignItems:'center',textAlign:'center'}}>
               <PaginationRounded/>

              </div>

            </div>



          </div>


        </div>
      </div>
 


  );

}

export default Products_Listing