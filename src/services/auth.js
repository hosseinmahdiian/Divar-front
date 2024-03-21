import { api } from "../configs/api";

const sendOTP = async (mobile) => {
  // console.log(mobil);

  try {
    const res = await api.post("auth/send-otp", { mobile });
    return { res };
  } catch (error) {
    return { error };
  }
};

const checkOTP = async (mobile, code) => {
  try {
    const res = await api.post("auth/check-otp", { mobile, code });
    return { res };
  } catch (error) {
    return { error };
  }
};

export { sendOTP,checkOTP };
