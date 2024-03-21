import { api } from "../configs/api";

const addCategory = (data) => {
  return api.post("/category", data);
};

const getCategory = () => {
  return api.get("/category");
};

export { addCategory,getCategory };
