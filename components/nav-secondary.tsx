"use client";

import * as React from "react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: React.ReactNode;
  }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup className="px-1" {...props}>
      <SidebarGroupLabel className="px-2 pb-1 text-[10px] font-bold uppercase tracking-[0.12em] text-sidebar-foreground/45">
        Utilities
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="gap-1">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className="h-8 rounded-lg px-2.5 text-[12px] text-sidebar-foreground/75 hover:bg-sidebar-accent/30 hover:text-sidebar-foreground"
              >
                <a href={item.url}>
                  <span className="text-sidebar-foreground/65">
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
