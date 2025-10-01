"use client";

import { usePathname } from "next/navigation";
import CustomLink from "@/app/(home)/_components/Link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { siteMetadata } from "@/site-meta-data";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const curNav = pathname.slice(1).split("/").shift();

  return (
    <div id="header" className="flex flex-col gap-5">
      <Avatar className="size-10 mb-3" asChild>
        <CustomLink href="/" aria-label={siteMetadata.headerTitle}>
          <AvatarFallback className="font-backyard bg-profile">
            YU
          </AvatarFallback>
        </CustomLink>
      </Avatar>

      <CustomLink href="/" className="text-2xl">
        {siteMetadata.headerTitle}
      </CustomLink>

      <div className="flex gap-5">
        {[
          { href: "/", label: "About" },
          { href: "/blog", label: "Blog" },
        ].map((item) => (
          <CustomLink
            key={item.href}
            href={item.href}
            className={cn(
              "hover:text-primary-500 dark:hover:text-primary-400 font-medium text-gray-900 dark:text-gray-100",
              curNav === item.href.slice(1) && "dark:text-highlight dark:font-bold",
            )}
          >
            {item.label}
          </CustomLink>
        ))}
      </div>
    </div>
  );
}
