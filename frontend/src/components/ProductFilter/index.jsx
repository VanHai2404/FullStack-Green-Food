import React from 'react';
import ShopByLineFilter from './ShopByLineFilter';

const ProductFilter  = () => {
    const ListCategories = [
        { id: 1, title: "Bulk Buy" },
        { id: 2, title: "Bulk Fruits" },
        { id: 3, title: "Bulk Vegetables" },
        { id: 4, title: "Potatoes & Yams" },
        { id: 5, title: "Bulk Fruits" }
      ];

      const LineList = [
        { id: 1, title: "30571071113" },
        { id: 2, title: "Chiquita" },
        { id: 3, title: "Sebastiano" },
        { id: 4, title: "Vegetable Souk Fruits" },
        { id: 5, title: "Vegetable Souk Vegetables" },
        { id: 6, title: "Zespri" }
      ];

      const OriginList = [
        { id: 1, title: "Australia" },
        { id: 2, title: "Brazil" },
        { id: 3, title: "China" },
        { id: 4, title: "Ecuador" },
        { id: 5, title: "Egypt" },
        { id: 6, title: "India" },
        { id: 7, title: "Iran" },
        { id: 8, title: "Vietnam" },
        { id: 9, title: "Mexico" },
        { id: 10, title: "New Zealand" },
        { id: 11, title: "Vietnam" },
        { id: 12, title: "Spain" },
        { id: 13, title: "Syria" },
        { id: 14, title: "Turkey" },
        { id: 15, title: "United Arab Emirates" },
        { id: 16, title: "United States" },
        { id: 17, title: "Vietnam" },
        { id: 18, title: "Yemen" }
      ];

  return (
    <ul style={{ borderTop: "1px solid #d7d7d7" }} className="nav_filterT2">
        <ShopByLineFilter title ="Categories" List={ListCategories} value={1}/>
        <ShopByLineFilter title="SHOP BY LINE" List={LineList} value={0}/>
        <ShopByLineFilter title ="Origin"List ={OriginList} value={0}/>


      <div className="filter_heading">PRICE RANGE</div>
      <div className="price-filter d-flex no-gutters w-100 align-items-center justify-content-between">
        <input type="number" placeholder="" className="form-control ng-valid ng-dirty ng-touched" />
        <p className="mb-0">TO</p>
        <input type="number" className="form-control" />
        <p className="mb-0" style={{ cursor: "pointer" }}>GO</p>
      </div>
    </ul>

  );
  
};

export default ProductFilter ;
