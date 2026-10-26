import { Link, useLocation } from "react-router";
import { ChevronDownIcon, DotIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface Props {
  currentPage: string;
  breadcrumbs?: Breadcrumb[];
}

interface Breadcrumb {
  label: string;
  to: string;
}

export const CustomBreadcrums = ({ currentPage, breadcrumbs = [] }: Props) => {
  return (
    <Breadcrumb className="m-8">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* proximo link */}
        {breadcrumbs?.map((crumb) => (
          <div className="flex items-center">
            <BreadcrumbItem>
              <BreadcrumbSeparator>
                <DotIcon />
              </BreadcrumbSeparator>
              <BreadcrumbLink>
                <Link to={crumb.to}>{crumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}
        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink className="text-black">{currentPage}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrums;
