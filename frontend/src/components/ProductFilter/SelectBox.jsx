import React from 'react';

const SelectBox = () => {
  return (
    <select className="select_sort" style={{ color: 'black', fontWeight: 500, border: 0 }}>
      <option value="" disabled="" defaultValue="option1"  >Sort By</option>
      <option value="1: ">Relevance</option>
      <option value="2: recent">Newest Arrivals</option>
      <option value="3: price_desc">Price: High to Low</option>
      <option value="4: price_asc">Price: Low to High</option>
      <option value="5: name_desc">Name: Z to A</option>
      <option value="6: name_asc">Name: A to Z</option>
      <option value="7: most_selling">Most Popular</option>
    </select>
  );
};

export default SelectBox;
