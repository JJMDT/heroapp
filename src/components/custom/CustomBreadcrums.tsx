import { Link } from "react-router";
import { DotIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItemType {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadcrumbs?: BreadcrumbItemType[];
}

export const CustomBreadcrums = ({ currentPage, breadcrumbs = [] }: Props) => {
  return (
    <Breadcrumb className="m-8">
      <BreadcrumbList>
        {/* Home */}
        <BreadcrumbItem>
          <Link
            to="/"
            className="transition-colors hover:text-foreground text-muted-foreground"
          >
            Home
          </Link>
        </BreadcrumbItem>

        {/* Links dinámicos */}
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center">
            <BreadcrumbSeparator>
              <DotIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <Link
                to={crumb.to}
                className="transition-colors hover:text-foreground text-muted-foreground"
              >
                {crumb.label}
              </Link>
            </BreadcrumbItem>
          </div>
        ))}

        {/* Página actual (sin link) */}
        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <span className="text-black font-medium">{currentPage}</span>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrums;
