import Link from "next/link";
import { BRAND, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

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
  const h = heightClass[size];

  const logo = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BRAND.logoDark}
        alt=""
        width={180}
        height={45}
        className={cn(h, "w-auto max-w-[180px] sm:max-w-[200px] dark:hidden object-contain object-left", imageClassName)}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BRAND.logoWhite}
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
        aria-label={SITE_NAME}
        className={cn("inline-flex shrink-0 items-center", className)}
      >
        {logo}
      </Link>
    );
  }

  return <span className={cn("inline-flex shrink-0 items-center", className)}>{logo}</span>;
}
