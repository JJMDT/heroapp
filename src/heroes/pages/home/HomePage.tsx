import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import HeroGrid from "../hero/ui/HeroGrid";
import { useState } from "react";
import CustomPagination from "@/components/custom/CustomPagination";
import CustomBreadcrums from "@/components/custom/CustomBreadcrums";

type TabsList = "all" | "heroes" | "villains" | "favorites";
export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<TabsList>("all");
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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={() => setActiveTab("all")} value="all">
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setActiveTab("favorites")}
              value="favorites"
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab("heroes")} value="heroes">
              Heroes (12)
            </TabsTrigger>

            <TabsTrigger
              onClick={() => setActiveTab("villains")}
              value="villains"
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <h1>todos los personajes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los personajes favoritos */}
            <h1>favorites</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los heroes */}
            <h1>heroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los villanos */}
            <h1>Villains</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={5} />
      </>
    </>
  );
};

export default HomePage;
