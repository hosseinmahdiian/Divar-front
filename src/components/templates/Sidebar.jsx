import React from "react";

import { getCategory } from "../../services/admi";
import Loader from "../modules/Loader";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

const Sidebar = ({ categories }) => {
    
  return (
    <div className={styles.sidebar}>
      <h3>دسته بندی ها</h3>
      <ul>
        {categories?.data.map((category) => (
          <Link to={`/category/${category.slug}`} key={category._id}>
            <li>
              <img src={`../../../public/${category.icon}.svg`} />
              <p>{category.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
