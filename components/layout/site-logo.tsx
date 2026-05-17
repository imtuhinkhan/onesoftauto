"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSiteSettings } from "@/lib/site-settings-context";

type SiteLogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
  size?: "sm" | "md" | "lg";
};

const heightClass = {
  sm: "h-9 sm:h-10",
  md: "h-10 sm:h-11",
  lg: "h-12 sm:h-14",
} as const;

export function SiteLogo({
  href = "/",
  className,
  imageClassName,
  size = "md",
}: SiteLogoProps) {
  const settings = useSiteSettings();
  const h = heightClass[size];

  const logo = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={settings.logoDark}
        alt=""
        width={180}
        height={45}
        className={cn(h, "w-auto max-w-[180px] sm:max-w-[200px] dark:hidden object-contain object-left", imageClassName)}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={settings.logoWhite}
        alt=""
        width={180}
        height={45}
        className={cn(h, "w-auto max-w-[180px] sm:max-w-[200px] hidden dark:block object-contain object-left", imageClassName)}
      />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={settings.siteName}
        className={cn("inline-flex shrink-0 items-center", className)}
      >
        {logo}
      </Link>
    );
  }

  return <span className={cn("inline-flex shrink-0 items-center", className)}>{logo}</span>;
}
