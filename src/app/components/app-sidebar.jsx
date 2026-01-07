"use client"

import * as React from "react"
import { ChevronRight, Terminal, Component, Code2, BookOpen, Search } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const sidebarData = {
  navMain: [
    {
      title: "Getting Started",
      icon: Terminal,
      isActive: true,
      items: [
        { title: "Installation", url: "/docs/installation" },
        { title: "Project Structure", url: "/docs/structure" },
      ],
    },
    {
      title: "Components",
      icon: Component,
      items: [
        { title: "Buttons", url: "/docs/components/button" },
        { title: "Inputs", url: "/docs/components/input" },
      ],
    },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" className="border-r-zinc-800" {...props}>
      <SidebarHeader className="bg-black border-b border-zinc-800 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="text-white hover:bg-zinc-900">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-white text-black">
                <BookOpen className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Zure UI</span>
                <span className="truncate text-xs text-zinc-500">v1.0.0</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-black">
        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-500">Documentation</SidebarGroupLabel>
          <SidebarMenu>
            {sidebarData.navMain.map((item) => (
              <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title} className="text-zinc-300 hover:bg-zinc-900 hover:text-white">
                      {item.icon && <item.icon className="size-4" />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="border-zinc-800">
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url} className="text-zinc-500 hover:text-white">
                              {subItem.title}
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}