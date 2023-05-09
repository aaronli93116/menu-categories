import React from "react";
import "./menu.css";

function MenuList(props) {
  const { query, menuList } = props;
  return (
    <div className="table-content">
      <h1 className={query.length === 0 ? "hide-title" : "show-title"}>
        Items in Category: ({query})
      </h1>
      <table className={query.length === 0 ? "hide-table" : "show-table"}>
        <thead>
          <tr>
            <th className="head">Name</th>
            <th className="head">Description</th>
          </tr>
        </thead>
        <tbody>
          {menuList.map((element) => (
            <tr key={element.id} className="body-content">
              <td className="name">{element.name}</td>
              <td className="description">{element.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MenuList;
