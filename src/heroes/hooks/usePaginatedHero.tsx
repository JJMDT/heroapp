import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-herores-by-page";

const usePaginatedHero = (page: string, limit: string, category: string) => {
  return useQuery({
    queryKey: ["heroes", { page, limit, category }],
    queryFn: () => getHeroesByPageAction(+page, +limit, category),
    staleTime: 1000 * 60 * 5,
  });
};

export default usePaginatedHero;
