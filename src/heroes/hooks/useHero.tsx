import { useQuery } from "@tanstack/react-query";
import { getHero } from "../actions/get-hero";

const useHero = (idSlug: string | undefined) => {
  return useQuery({
    queryKey: ["hero", idSlug],
    queryFn: () => getHero(idSlug!),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};

export default useHero;
