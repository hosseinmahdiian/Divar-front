import React from 'react';
import { Link } from 'react-router-dom';
import { sp } from '../../utils/numbers';

import styles from "./Posts.module.css";

const BASEURL = import.meta.env.VITE_BASE_URL;

const Posts = ({ posts }) => {
    // console.log(posts);
    if (!posts?.data.posts) return;
  return (
    <div>
      <div className={styles.main}>
        {posts.data?.posts.map((post) => (
          <Link key={post._id} to={`/ditails/${post._id}`}>
            <div>
              <div>
                <h5>{post.options.title}</h5>
                <span>
                  <p>{sp(post.amount)}تومان</p>
                  <p>{post.options.city}</p>
                </span>
              </div>
              <img src={`${BASEURL}${post.images[0]}`} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
