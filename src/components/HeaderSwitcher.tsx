// src/components/HeaderSwitcher.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import HomeHeader from "@/components/HomeHeader"; // create this if you haven't

export default function HeaderSwitcher() {
  const pathname = usePathname();
  const isHome = pathname === "/"; // or include hashes/query if you want

  return isHome ? <HomeHeader /> : <Header />;
}
