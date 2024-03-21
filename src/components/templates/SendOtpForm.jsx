import React from "react";
import { sendOTP } from "../../services/Auth";
import styles from "./SendOtpForm.module.css";
import toast from "react-hot-toast";

const SendOtpForm = ({ setMobile, mobile, setStep }) => {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length != 11) return;
    const { res, error } = await sendOTP(mobile);
    setStep(2);

    if (res) toast.success("کد ارسال شد  ");

    if (error) toast.error("مشکلی پیش آمده");
  };
  return (
    <>
      <form className={styles.conainer} onSubmit={submitHandler}>
        <p className={styles.title}>ورود به حساب کاربری</p>
        <span className={styles.text}>
          برای استفاده ار ار امکانات دیوار , لطفا شماره موبایل خود را وارد کنید.
          کد تایید به این شماره پیامک خواهد شد
        </span>
        <label className={styles.lable} htmlFor="input">
          شماره موبایل خود را وارد کنید
        </label>
        <input
          className={styles.input}
          type="text"
          id="input"
          placeholder="شماره موبایل"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button className={styles.btn} type="submit">
          ارسال کد تایید
        </button>
      </form>
    </>
  );
};

export default SendOtpForm;
