"use client";

import Toc from "../components/Toc";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

export function DocsTocSidebar() {
  return (
    <Sidebar
      side="right"
      className="hidden md:block xl:flex w-[180px] border-l border-zinc-800 bg-black"
    >
      <SidebarContent className="px-2 py-3 hidden md:block bg-black">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[11px] text-zinc-500">
            On this page
          </SidebarGroupLabel>

          <Toc />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
