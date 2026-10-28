import { useQuery } from "@tanstack/react-query";
import { getSummaryAction } from "../actions/get-summary.action";
import { getHeroesByPageAction } from "../actions/get-herores-by-page";

export const useHeroSummary = () => {
  return useQuery({
    queryKey: ["summary-information"],
    queryFn: () => getSummaryAction(),
    staleTime: 1000 * 60 * 5,
  });
};
