import CustomJumbotron from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import SearchControler from "./ui/SearchControler";
import CustomBreadcrums from "@/components/custom/CustomBreadcrums";

const SearchPage = () => {
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
    </>
  );
};

export default SearchPage;
