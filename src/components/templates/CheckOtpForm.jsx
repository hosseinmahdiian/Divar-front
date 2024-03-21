import React from "react";

import styles from "./CheckOtpForm.module.css";

import { checkOTP } from "../../services/Auth";
import { setCookie } from "../../utils/Cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../services/user";
import toast from "react-hot-toast";

const CheckOtpForm = ({ mobile, setCode, code, setStep }) => {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length != 5) return;
    const { error, res } = await checkOTP(mobile, code);

    if (res) {
      setCookie(res.data);
      toast.success("ورود با موفقیت انجام شد");
      navigate("/");
      refetch()
    }
    if (error) toast.error("مشکلی پیش آمده");
  };
  return (
    <>
      <form className={styles.conainer} onSubmit={submitHandler}>
        <p className={styles.title}>تایید کد پیامک شده</p>
        <span className={styles.text}>
          کد پیامک شده به شماره "{mobile}"را وارد کنید
        </span>
        <label className={styles.lable} htmlFor="input">
          کد تایید را وارد کیند
        </label>
        <input
          className={styles.input}
          type="text"
          id="id"
          placeholder="کد تایید"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button className={styles.btn} type="submit">
          ورود
        </button>
        <button className={styles.btn2} onClick={() => setStep(1)}>
          تغیر شماره موبایل
        </button>
      </form>
    </>
  );
};

export default CheckOtpForm;
