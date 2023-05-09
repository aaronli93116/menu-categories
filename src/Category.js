import React from "react";
import "./category.css";

function Category(props) {
  const { renderMenuList, category } = props;
  const handleClick = (query) => {
    renderMenuList(query);
  };

  return (
    <div className="category-wrapper">
      <ul className="category-list">
        {category.map((element) => (
          <li
            key={element.id}
            className="categoryName"
            onClick={() => handleClick(element.short_name)}
          >
            {element.name} - ({element.short_name})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
