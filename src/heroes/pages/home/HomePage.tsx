import { useSearchParams } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import HeroGrid from "../hero/ui/HeroGrid";
import CustomPagination from "@/components/custom/CustomPagination";
import CustomBreadcrums from "@/components/custom/CustomBreadcrums";
import { use, useMemo } from "react";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import usePaginatedHero from "@/heroes/hooks/usePaginatedHero";
import { FavoritesHeroContext } from "@/heroes/context/FavoritesHeroContext";

type TabsList = "all" | "heroes" | "villains" | "favorites";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favorites, favoritesCount } = use(FavoritesHeroContext)


  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const category = searchParams.get("category") ?? "all";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "heroes", "villains", "favorites"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);

  const { data: heroeResponse } = usePaginatedHero(page, limit, category);
  const { data: stats } = useHeroSummary();

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="SuperHeroApp"
          description="Encuentra a tus personajes favoritos"
        />
        <CustomBreadcrums currentPage="Super Heroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Advanced Filters */}

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "all");
                  prev.set("category", "all");
                  return prev;
                })
              }
              value="all"
            >
              All Characters ({stats?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  prev.set("page", "1");
                  return prev;
                })
              }
              value="favorites"
              className="flex items-center gap-2"
            >
              Favorites ({favoritesCount})
            </TabsTrigger>
            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  prev.set("category", "hero");
                  prev.set("page", "1");
                  return prev;
                })
              }
              value="heroes"
            >
              Heroes ({stats?.heroCount})
            </TabsTrigger>

            <TabsTrigger
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  prev.set("category", "villain");
                  prev.set("page", "1");

                  return prev;
                })
              }
              value="villains"
            >
              Villains ({stats?.villainCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <h1>todos los personajes</h1>
            <HeroGrid heroes={heroeResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los personajes favoritos */}
            <h1>favorites</h1>
            <HeroGrid heroes={favorites ?? []} />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los heroes */}
            <h1>heroes</h1>
            <HeroGrid heroes={heroeResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los villanos */}
            <h1>Villains</h1>
            <HeroGrid heroes={heroeResponse?.heroes ?? []} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {selectedTab !== 'favorites' && (
          <CustomPagination totalPages={Number(heroeResponse?.pages)} />

        )}
      </>
    </>
  );
};

export default HomePage;
