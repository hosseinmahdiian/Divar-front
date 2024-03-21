import { useQuery } from "@tanstack/react-query";
import styles from "./PostsOfCategory.module.css";
import { getCategory } from "../../services/admi";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../../services/user";
import Posts from "../modules/Posts";

const PostsOfCategory = () => {
  const { data: categories, isLoading: categoriesLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  const { data: posts, isLoading: postsLoading } = useQuery(
    ["posts-list"],
    getAllPosts
  );

  const parms = useParams();

  const id = categories?.data.find((category) => category.slug == parms?.slug);

  const result={
    data:{
        posts:[]
    }
  }
   result.data.posts = posts?.data.posts.filter((post) => post.category == id?._id);
//   console.log(result.data.posts);
  if (!result) return;
  return (
    <>
      <Posts posts={result} />
    </>
  );
};

export default PostsOfCategory;
