import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { Search } from "lucide-react";
import { NavigationSheet } from "./navigation-sheet";
import { NavMenu } from "./nav-menu";
import { Menu } from "@/lib/data";

function Navbar({ menus }: { menus: Menu[] }) {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background border max-w-(--breakpoint-xl) mx-auto rounded-full z-50">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <div className=""></div>
        {/* Desktop Menu */}
        <NavMenu menus={menus} className="hidden md:block" />

        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet menus={menus} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
