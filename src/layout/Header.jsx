import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
import { setCookie } from "../utils/Cookie";
import { useState } from "react";

import styles from "./Header.module.css";

const Header = () => {
  const [profil, setprofile] = useState(false);
  const { data, isLoading } = useQuery(["profile"], getProfile);
  // console.log(data);

  const exitHandler = () => {
    setCookie(null);
    location.reload();
    // console.log(data);
  };

  // console.log(data?.data?.role);
  return (
    <header
      className={styles.header}
      onClick={() => {
        if (profil == true) setprofile(false);
      }}
    >
      <div>
        <Link to="/">
          <img className={styles.logo} src="../../public/divar.svg" />
        </Link>
        <span style={{ paddingTop: "10px" }}>
          <img src="../../public/location.svg" />
          <p>تهران</p>
        </span>
      </div>

      <div className={styles.profile}>
        {profil && (
          <ul>
            {data?.data?.role == "ADMIN" && (
              <Link to="/admin">
                <li>پنل ادمین</li>
              </Link>
            )}

            {!!data?.data?.role ? (
              <>
                <Link to="/my-posts">
                  <li>آگهی های من</li>
                </Link>
                <Link to="/">
                  <li onClick={exitHandler}>خروج</li>
                </Link>
              </>
            ) : (
              <Link to="/auth">
                <li>ورود</li>
              </Link>
            )}
          </ul>
        )}

        <span onClick={() => setprofile(!profil)} style={{ cursor: "pointer" }}>
          <img src="../../public/profile.svg" alt="" />
          <p>دیوار من</p>
        </span>

        <Link to="/dashboard">
          <span className={styles.btn}>
            <p>ثبت آگهی</p>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
