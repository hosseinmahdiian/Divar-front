import { api } from "../configs/api";
import { getCookie } from "../utils/Cookie";

const token = getCookie("accessToken");

const getProfile = () => api.get("/user/whoami").then((res) => res || false);

const getMyPost = () => api.get("/post/my").then((res) => res || false);

const getAllPosts =()=> api.get("")

const deletePost =()=>api.delete("")
// console.log();

export { getProfile, getMyPost ,getAllPosts };
