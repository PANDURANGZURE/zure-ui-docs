"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronRight,
  ChevronUp,
  Terminal,
  Component,
  BookOpen,
  Github,
  Linkedin,
  GitPullRequestCreate,
  Contact,
  Scale
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
      isActive: true,
      items: [
        { title: "Buttons", url: "/docs/components/button" },
        { title: "Inputs", url: "/docs/components/input" },
        { title: "Navbar", url: "/docs/components/Navbar" },
        { title: "Textarea", url: "/docs/components/Textarea" },
        { title: "Select", url: "/docs/components/Select" },
        { title: "Checkbox", url: "/docs/components/Checkbox" },
        { title: "Alert", url: "/docs/components/Alert" },
        { title: "Skeletons", url: "/docs/components/Skeletons" },
        { title: "Loader", url: "/docs/components/Loader" },
      ],
    },
  ],
}

export function AppSidebar(props) {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="border-r border-zinc-800 bg-black" {...props}>
      {/* ---------- HEADER ---------- */}
      <SidebarHeader className="bg-black border-b border-zinc-800 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="text-white hover:bg-zinc-900"
              asChild
            >
              <Link href="/docs">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-white text-black">
                  <BookOpen className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Zure UI</span>
                  <span className="truncate text-xs text-zinc-500">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* ---------- CONTENT ---------- */}
      <SidebarContent className="bg-black scrollbar-thin scrollbar-thumb-zinc-800">
        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-500">Documentation</SidebarGroupLabel>
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
                      {item.items?.map((subItem) => {
                        const isActive = pathname === subItem.url
                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild isActive={isActive}>
                              <Link
                                href={subItem.url}
                                className={`transition-colors ${
                                  isActive ? "text-white font-medium" : "text-zinc-500 hover:text-zinc-200"
                                }`}
                              >
                                {subItem.title}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* ---------- FOOTER ---------- */}
      <SidebarFooter className="border-t  border-zinc-800 bg-black p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="w-full justify-start gap-3 text-zinc-400 hover:bg-zinc-900 hover:text-white data-[state=open]:bg-zinc-900"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src="https://pandurang-2k25.netlify.app/assets/pfp-_lj6DcG3.png" alt="PZ" />
                    <AvatarFallback className="rounded-lg bg-zinc-800 text-white">PZ</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate font-semibold text-white">Pandurang Zure</span>
                    <span className="truncate text-xs text-zinc-500">Frontend Developer</span>
                  </div>
                  <ChevronUp className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                align="end"
                sideOffset={4}
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg border-zinc-800 bg-black p-1 text-zinc-400"
              >
                <div className="flex items-center gap-2 px-2 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src="https://pandurang-2k25.netlify.app/assets/pfp-_lj6DcG3.png" />
                    <AvatarFallback className="rounded-lg bg-zinc-800">PZ</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-white">Pandurang Zure</span>
                    <span className="truncate text-xs text-zinc-500">pandurangzure3112@gmail.com</span>
                  </div>
                </div>
                <div className="my-1 h-px bg-zinc-800" />
                <DropdownMenuItem className="gap-2 focus:bg-zinc-900 focus:text-white cursor-pointer">
                  <GitPullRequestCreate className="size-4" />
                  Contribute
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 focus:bg-zinc-900 focus:text-white cursor-pointer">
                  <Contact className="size-4" />
                  Contact
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 focus:bg-zinc-900 focus:text-white cursor-pointer">
                  <Scale className="size-4" />
                  License
                </DropdownMenuItem>
                <div className="my-1 h-px bg-zinc-800" />
                <DropdownMenuItem asChild className="gap-2 focus:bg-zinc-900 focus:text-white cursor-pointer">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <Linkedin className="size-4" />
                    LinkedIn
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="gap-2 focus:bg-zinc-900 focus:text-white cursor-pointer">
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <Github className="size-4" />
                    GitHub
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}