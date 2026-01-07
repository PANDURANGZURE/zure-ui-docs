"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Terminal, Component, FileText, Search, Layout, Type, SquareCheck, MousePointer2 } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

// 1. Define your searchable items here
const SEARCH_ITEMS = [
  {
    group: "Getting Started",
    items: [
      { title: "Installation", url: "/docs/installation", icon: Terminal },
      { title: "Project Structure", url: "/docs/structure", icon: FileText },
    ],
  },
  {
    group: "Components",
    items: [
      { title: "Button", url: "/docs/components/button", icon: MousePointer2 },
      { title: "Input", url: "/docs/components/input", icon: Type },
      { title: "Navbar", url: "/docs/components/Navbar", icon: Layout },
      { title: "Checkbox", url: "/docs/components/Checkbox", icon: SquareCheck },
      // Add more here... it will auto-render!
    ],
  },
]

export function SearchCommand() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const onSelectAction = (url) => {
    setOpen(false)
    router.push(url)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group flex w-full items-center gap-2 rounded-md border border-zinc-800 bg-black px-3 py-1.5 text-sm text-zinc-500 transition-all hover:bg-zinc-900 hover:text-zinc-300"
      >
        <Search className="size-4 text-zinc-500 group-hover:text-zinc-300" />
        <span className="flex-1 text-left">Search docs...</span>
        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-1.5 font-mono text-[10px] font-medium text-zinc-500">
          <span className="text-xs font-sans">⌘</span>K
        </kbd>
      </button>

      <CommandDialog 
        open={open} 
        onOpenChange={setOpen}
        className="border-zinc-800 bg-black text-zinc-100"
      >
        <CommandInput 
          placeholder="Type to search..." 
          className="border-none text-zinc-100 placeholder:text-zinc-600 focus:ring-0"
        />
        <CommandList className="border-t border-zinc-800 bg-black scrollbar-thin scrollbar-thumb-black">
          <CommandEmpty className="py-6 text-zinc-500">No results found.</CommandEmpty>
          
          {SEARCH_ITEMS.map((section, index) => (
            <React.Fragment key={section.group}>
              <CommandGroup 
                heading={section.group} 
                className="text-zinc-500 [&_[cmdk-group-heading]]:text-zinc-500"
              >
                {section.items.map((item) => (
                  <CommandItem 
                    key={item.url}
                    onSelect={() => onSelectAction(item.url)}
                    className="data-[selected=true]:bg-zinc-900 data-[selected=true]:text-white cursor-pointer"
                  >
                    <item.icon className="mr-2 size-4 text-zinc-400" />
                    <span>{item.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              {/* Only add a separator if it's not the last group */}
              {index < SEARCH_ITEMS.length - 1 && <CommandSeparator className="bg-zinc-800" />}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}