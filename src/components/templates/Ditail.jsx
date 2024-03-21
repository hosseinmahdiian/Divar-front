import Loader from "../modules/Loader";
import toast from "react-hot-toast";

import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/user";
import { useNavigate, useParams } from "react-router-dom";
import { sp } from "../../utils/numbers";
import { IoIosArrowBack } from "react-icons/io";

import styles from "./Ditail.module.css";

const BASEURL = import.meta.env.VITE_BASE_URL;

const Ditail = () => {
  const { data, isLoading } = useQuery(["post-list"], getAllPosts);

  const serchParams = useParams();

  const navigat = useNavigate();

  if (isLoading) return <Loader />;

  const result = data.data?.posts.find((post) => {
    return post._id == serchParams.id;
  });

  return (
    <div className={styles.ditail}>
      <button onClick={() => navigat(-1)}>
        <IoIosArrowBack />
      </button>
      <div>
        <img src={`${BASEURL}${result.images}`} alt="" />
        <section>
          <div>
            <p>{result.options.title}</p>
            <span>{result.options.city}</span>
          </div>
          <div>
            <h4>{sp(result.amount)} تومان </h4>
            <span>
              {new Date(result.createdAt).toLocaleDateString("fa-IR")} تاریخ
              آگهی{" "}
            </span>
          </div>
        </section>
        <h3>{result.options.content}</h3>
        <button onClick={()=>toast.error("مشکلی پیش آمده")}>تماس با فروشنده</button>
      </div>
    </div>
  );
};

export default Ditail;
