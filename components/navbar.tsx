"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { Search } from "lucide-react";
import { NavigationSheet } from "./navigation-sheet";
import { NavMenu } from "./nav-menu";
import { Menu } from "@/lib/types";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";

function Navbar({ menus }: { menus: Menu[] }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 inset-x-4 h-16 bg-background/80 backdrop-blur-md border border-border/40 max-w-(--breakpoint-xl) mx-auto rounded-full z-50 shadow-sm supports-[backdrop-filter]:bg-background/60">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <div className="">{/* Logo placeholder if needed */}</div>
        {/* Desktop Menu */}
        <NavMenu menus={menus} className="hidden md:block" />

        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet menus={menus} />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
