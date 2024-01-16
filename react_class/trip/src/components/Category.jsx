import React from 'react';
import './Category.css';

const Category = () => {
  const categories = ["홈", "항공권", "호텔,리조트", "투어", "패키지"];

  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
