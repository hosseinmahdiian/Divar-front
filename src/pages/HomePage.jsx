import React from "react";
import Sidebar from "../components/templates/Sidebar";
import { getCategory } from "../services/admi";
import { getAllPosts } from "../services/user";
import Loader from "../components/modules/Loader";
import { useQuery } from "@tanstack/react-query";
import Posts from "../components/modules/Posts";

const HomePage = () => {
  const { data: categories, isLoding: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );
  const { data: posts, isLoding: postsLoading } = useQuery(
    ["posts-list"],
    getAllPosts
  );

  if (postsLoading || categoryLoading) return <Loader />;

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar categories={categories} />
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default HomePage;
