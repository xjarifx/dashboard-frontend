"use client";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CirclePlusIcon, MailIcon } from "lucide-react";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.ReactNode;
  }[];
}) {
  return (
    <SidebarGroup className="px-1">
      <SidebarGroupLabel className="px-2 pb-1 text-[10px] font-bold uppercase tracking-[0.12em] text-sidebar-foreground/50">
        Main
      </SidebarGroupLabel>
      <SidebarGroupContent className="flex flex-col gap-3">
        <SidebarMenu className="gap-2">
          <SidebarMenuItem className="grid grid-cols-[1fr_auto] items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="h-9 rounded-xl bg-primary text-sm font-semibold tracking-tight text-primary-foreground transition-all duration-150 hover:bg-primary/90 hover:text-primary-foreground active:scale-[0.98] active:bg-primary/90 active:text-primary-foreground"
            >
              <CirclePlusIcon />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 rounded-xl border-sidebar-border/70 text-sidebar-foreground/70 hover:text-sidebar-foreground group-data-[collapsible=icon]:hidden"
              variant="outline"
            >
              <MailIcon />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu className="gap-1.5">
          {items.map((item, index) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={index === 0}
                tooltip={item.title}
                className="h-9 rounded-xl px-2.5 text-[13px] font-medium transition-all duration-150 data-[active=true]:bg-sidebar-accent/50 data-[active=true]:font-semibold"
              >
                <a href={item.url}>
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-sidebar-border/70 bg-sidebar text-sidebar-foreground/80 transition-colors group-data-[collapsible=icon]:size-7">
                    {item.icon}
                  </span>
                  <span className="tracking-tight">{item.title}</span>
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity data-[active=true]:opacity-100" />
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
