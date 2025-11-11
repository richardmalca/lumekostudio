"use client";

import Link from "next/link";
import { MountainIcon } from "@/components/icons/MountainIcon";

export function Header() {
  return (
    <header className="container z-10 flex h-20 items-center justify-center py-4">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-8 w-8" />
        <span className="text-xl font-bold">LumekoStudio</span>
      </Link>
    </header>
  );
}
