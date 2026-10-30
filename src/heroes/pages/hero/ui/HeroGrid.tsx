import HeroGridCard from "./HeroGridCard";
import type { Hero } from "@/heroes/types/hero.interface";

interface Props {
  heroes: Hero[];
}

const HeroGrid = ({ heroes }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {heroes.length === 0 ? (
        <p className="col-span-full text-center text-gray-500 py-8">
          No hay superhéroes que coincidan con la búsqueda...
        </p>
      ) : (
        heroes.map((hero) => <HeroGridCard key={hero.id} hero={hero} />)
      )}
    </div>
  );
};

export default HeroGrid;
