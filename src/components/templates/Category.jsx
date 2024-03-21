import React, { useState } from "react";

import styles from "./Category.module.css";
import { useMutation } from "@tanstack/react-query";
import { addCategory } from "../../services/admi";
import toast from "react-hot-toast";

const Category = () => {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const { mutate, isloading, data, error } = useMutation(addCategory);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.icon || !form.name || !form.slug) return;
    mutate(form);
    console.log(form);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h3>دسته بندی جدید</h3>

      {data?.status == 201 && toast.success("دسته بندی با موفقیت اضافه شد")}
      

      {!!error && toast.error("مشکلی پیش آمده است")}

      <label htmlFor="name">اسم </label>
      <input type="text" name="name" id="name" />

      <label htmlFor="slug">اسلاگ </label>
      <input type="text" name="slug" id="slug" />

      <label htmlFor="icon">ایکون دسته بندی</label>
      <input type="text" name="icon" id="icon" />

      <button type="submit" disabled={isloading}>
        ایجاد
      </button>
    </form>
  );
};

export default Category;
