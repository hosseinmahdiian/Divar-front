import React from "react";
import { getMyPost } from "../../services/user";
import { useQuery } from "@tanstack/react-query";
import { sp } from "../../utils/numbers";
import { AiFillDelete } from "react-icons/ai";

import Loader from "../modules/Loader";

import styles from"./PostList.module.css"

const BASEURL = import.meta.env.VITE_BASE_URL;

const PostList = () => {
  const { data, isLoading, error } = useQuery(["my-post-list"], getMyPost);
  
  const deletHandler=(post)=>{
    console.log("comin delete "+ post._id);
  }
  return (
    <div className={styles.post}>
      <h3>آگهی های شما</h3>
      {isLoading ? (
        <Loader />
      ) : (
        data?.data?.posts.map((post) => (
          <div key={post._id}>
            <div>
              <img src={`${BASEURL}${post.images}`} />
              <span>
                <h4>{post.options.title}</h4>
                <p>{post.options.content}</p>
              </span>
            </div>
            <span className={styles.p2}>
              <span>
                <h4>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</h4>
                <p>{sp(post.amount)} تومان</p>
              </span>
              <button onClick={()=>deletHandler(post)}>
                <AiFillDelete />
              </button>
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
