import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import MenuList from "./MenuList";
import "./styles.css";

function App() {
  const [category, setCategory] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://stream-menu-svc-v3.herokuapp.com/category")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => console.log(error));
  };

  const renderMenuList = (query) => {
    axios
      .get(`https://stream-menu-svc-v3.herokuapp.com//item?category=${query}`)
      .then((response) => {
        setMenuList(response.data);
        setQuery(query);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="wrapper">
      <div>Menu Categories</div>
      <div className="content">
        <Category category={category} renderMenuList={renderMenuList} />
        <MenuList menuList={menuList} query={query} />
      </div>
    </div>
  );
}

export default App;
