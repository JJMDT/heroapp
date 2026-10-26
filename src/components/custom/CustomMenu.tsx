import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";

const CustomMenu = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-1">
        {/* Home */}
        <NavigationMenuItem>
          <Link
            to="/"
            className={cn(
              "px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md block",
              isActive("/") &&
                "bg-blue-300 rounded-b-md text-primary font-medium",
            )}
          >
            Home
          </Link>
        </NavigationMenuItem>

        {/* Search */}
        <NavigationMenuItem>
          <Link
            to="/search"
            className={cn(
              "px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md block",
              isActive("/search") &&
                "bg-blue-200 rounded-b-md text-primary font-medium",
            )}
          >
            Buscar Personajes
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CustomMenu;
