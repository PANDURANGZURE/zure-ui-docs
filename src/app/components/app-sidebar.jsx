"use client"

import * as React from "react"
import {
  ChevronRight,
  ChevronUp,
  Terminal,
  Component,
  BookOpen,
  LogOut,
  Settings,
  Github,
  Linkedin,
  GitPullRequestCreate
} from "lucide-react"

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
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

export function AppSidebar(props) {
  return (
    <Sidebar collapsible="icon" className="border-r border-zinc-800" {...props}>
      {/* ---------- HEADER ---------- */}
      <SidebarHeader className="bg-black border-b border-zinc-800 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="text-white hover:bg-zinc-900"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-white text-black">
                <BookOpen className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Zure UI</span>
                <span className="truncate text-xs text-zinc-500">
                  v1.0.0
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* ---------- CONTENT ---------- */}
      <SidebarContent className="bg-black">
        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-500">
            Documentation
          </SidebarGroupLabel>

          <SidebarMenu>
            {sidebarData.navMain.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className="text-zinc-300 hover:bg-zinc-900 hover:text-white"
                    >
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
                            <a
                              href={subItem.url}
                              className="text-zinc-500 hover:text-white"
                            >
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

      {/* ---------- FOOTER ---------- */}
      <SidebarFooter className="border-t border-zinc-800 bg-black p-2">
        <DropdownMenu className="">
          <DropdownMenuTrigger asChild>
            <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 hover:bg-zinc-900 hover:text-white">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatar.png" />
                <AvatarFallback>PZ</AvatarFallback>
              </Avatar>

              <div className="flex flex-1 flex-col text-left">
                <span className="text-sm font-medium text-white">
                  Pandurang Zure
                </span>
                <span className="text-xs text-zinc-500">
                  pandurangzure3112@gmail.com
                </span>
              </div>

              <ChevronUp className="h-4 w-4 text-zinc-400" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent side="top" align="center"  className="w-56 bg-black text-white">
            <DropdownMenuItem>
              <GitPullRequestCreate className="mr-2  text-white h-4 w-4" />
              Contribute
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Linkedin className="mr-2 text-white h-4 w-4" />
              Linkedin
            </DropdownMenuItem>
            <DropdownMenuItem className="">
              <Github className="mr-2 text-white group-hover:text-black  h-4 w-4" />
              Github
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
