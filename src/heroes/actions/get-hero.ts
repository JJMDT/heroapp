import { heroApi } from "../api/api";
import type { Hero } from "../types/hero.interface";

const URL = import.meta.env.VITE_API_URL;

export const getHero = async (idSlug: string) => {
  const { data } = await heroApi.get<Hero>(`/${idSlug}`);
  return {
    ...data,
    image: `${URL}/images/${data.image}`,
  };
};
