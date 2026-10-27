import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";

const CustomMenu = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;

  return (
    <nav aria-label="Main Navigation">
      <ul className="flex items-center gap-1 list-none m-0 p-0">
        {/* Home */}
        <li>
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
        </li>

        {/* Search */}
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default CustomMenu;
