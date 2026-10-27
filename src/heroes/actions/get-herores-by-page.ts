import { heroApi } from "../api/api";

export const getHeroesByPageAction = async () => {
  const { data } = await heroApi.get("/");
  console.log(data);
  return data;
};
