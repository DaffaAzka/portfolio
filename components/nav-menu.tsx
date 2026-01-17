"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "@/lib/data";
import Link from "next/link";
import { ComponentProps } from "react";

interface NavMenuProps extends ComponentProps<typeof NavigationMenu> {
  menus: Menu[];
}

export function NavMenu({ menus, ...props }: NavMenuProps) {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.id}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}>
              <Link href={menu.link}>{menu.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
