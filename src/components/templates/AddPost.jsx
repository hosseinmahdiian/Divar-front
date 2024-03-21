import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admi";
import { useState } from "react";

import styles from "./AddPost.module.css";
import { getCookie } from "../../utils/Cookie";
import axios from "axios";
import toast from "react-hot-toast";

const AddPost = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null,
  });
  const { data } = useQuery(["get-categories"], getCategory);

  const changeHandler = (e) => {
    const name = e.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: e.target.value });
    } else {
      setForm({ ...form, [name]: e.target.files[0] });
    }
  };

  const addHandeler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }

    const token = getCookie("accessToken");

    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          // Content_Typy: "multipart/form-data",
          "Content-Typy": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => toast.success(res.data.message))
      .catch((error) => toast.error("مشکلی پیش آمده "));
  };
  return (
    <form
      onSubmit={addHandeler}
      onChange={changeHandler}
      className={styles.form}
    >
      <h3>افزودن آگهی</h3>

      <label htmlFor="title">عنوان</label>
      <input type="text" name="title" id="title" />

      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content" />

      <label htmlFor="amount">قیمت</label>
      <input type="number" name="amount" id="amount" />

      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" />

      <label htmlFor="category">دسته بند </label>

      <select name="category">
        <option>--</option>
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>

      <label htmlFor="images">عکس</label>
      <input type="file" name="images" />

      <button type="submit" onClick={addHandeler}>
        ایجاد
      </button>
    </form>
  );
};

export default AddPost;
