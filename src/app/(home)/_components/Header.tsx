"use client";

import { usePathname } from "next/navigation";
import CustomLink from "@/app/(home)/_components/Link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { siteMetadata } from "@/site-meta-data";

export default function Header() {
  const pathname = usePathname();
  const curNav = pathname.slice(1).split("/").shift();

  const menus = [
    { href: "/", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <div
      id="header"
      className="flex flex-col gap-5 border-b-1 pb-2 md:border-r-1 md:border-b-0 md:pr-8"
    >
      <Avatar className="mb-3 size-10 hover:opacity-80" asChild>
        <CustomLink href="/" aria-label={siteMetadata.headerTitle}>
          <AvatarFallback className="bg-profile font-backyard">
            YU
          </AvatarFallback>
        </CustomLink>
      </Avatar>

      <div className="flex gap-5 md:flex-col">
        {menus.map((item) => (
          <CustomLink
            key={item.href}
            href={item.href}
            className={cn(
              "font-medium text-gray-900 hover:text-primary-500 hover:opacity-80 dark:text-gray-100 dark:hover:text-primary-400",
              curNav === item.href.slice(1) &&
                "dark:font-bold dark:text-highlight",
            )}
          >
            {item.label}
          </CustomLink>
        ))}
      </div>
    </div>
  );
}
