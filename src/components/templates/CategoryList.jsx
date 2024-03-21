import React from "react";
import Loader from "../modules/Loader";

import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admi";

import styles from "./CatgoryList.module.css";

const CategoryList = () => {
  const { data, isLoading } = useQuery(["get-catgories"], getCategory);
  console.log(data, isLoading);

  return (
    <div className={styles.list}>
      <h3>دسته بندی ها</h3>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i.id}>
            <span>
              <img src={`../../../public/${i.icon}.svg`} alt="" />
              <h5>{i.name}</h5>
            </span>
            <p>slug: {i.icon}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryList;
