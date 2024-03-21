import { api } from "../configs/api";
import { getCookie } from "../utils/Cookie";

const getNewToken = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;

  try {
    const res = await api.post("/auth/check-refresh-token", { refreshToken });
    return { res };
  } catch (error) {
    return { error };
  }
};

export { getNewToken };
