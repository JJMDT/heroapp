import CustomJumbotron from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import SearchControler from "./ui/SearchControler";
import CustomBreadcrums from "@/components/custom/CustomBreadcrums";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getSearchHero } from "@/heroes/actions/get-search-hero";
import HeroGrid from "../hero/ui/HeroGrid";

const SearchPage = () => {
  const [searchParam] = useSearchParams();

  const name = searchParam.get("name") ?? undefined;
  const team = searchParam.get("team") ?? undefined;
  const category = searchParam.get("category") ?? undefined;
  const universe = searchParam.get("universe") ?? undefined;
  const status = searchParam.get("status") ?? undefined;
  const strength = searchParam.get("strength") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name, team, category, universe, status, strength }],
    queryFn: () =>
      getSearchHero({ name, team, category, universe, status, strength }),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      <CustomJumbotron
        title="Busqueda de superheroes"
        description="En Busqueda de tu personaje"
      />
      <CustomBreadcrums
        currentPage="Buscador de Heroes"
        // breadcrumbs={[
        //   { label: "Home1", to: "/" },
        //   { label: "home2", to: "/" },
        // ]}
      />
      {/* filtro de busqueda */}
      <HeroStats />
      <SearchControler />
      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
