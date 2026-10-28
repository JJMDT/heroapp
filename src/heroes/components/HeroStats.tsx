import { Heart, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import HeroStatsCard from "./HeroStatsCard";
import { useHeroSummary } from "../hooks/useHeroSummary";

const HeroStats = () => {
  const { data: summary } = useHeroSummary();

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <HeroStatsCard
          title="Total de personajes"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
          <div className="flex gap-1 mt-2">
            <Badge variant="default" className="text-xs">
              {summary?.heroCount} Heroes
            </Badge>
            <Badge variant="destructive" className="text-xs">
              {summary?.villainCount} Villains
            </Badge>
          </div>
        </HeroStatsCard>

        <HeroStatsCard
          title="Favoritos"
          icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-2xl font-bold text-red-600">3</div>
          <p className="text-xs text-muted-foreground">18.8% of total</p>
        </HeroStatsCard>

        <HeroStatsCard
          title="Mas fuerte"
          icon={<Zap className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-lg font-bold">
            {summary?.strongestHero.alias}
          </div>
          <p className="text-xs text-muted-foreground">
            Strength: {summary?.strongestHero.strength}/10
          </p>
        </HeroStatsCard>

        <HeroStatsCard
          title="Inteligente"
          icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
          <p className="text-xs text-muted-foreground">
            Intelligence: {summary?.smartestHero.intelligence}/10
          </p>
        </HeroStatsCard>
      </div>
    </>
  );
};

export default HeroStats;
