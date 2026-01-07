"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Terminal, Component, FileText, Search } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

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
      {/* Trigger Button - Color Corrected for Header/Sidebar */}
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

      {/* Dialog Colors - Deep Black and Sharp Zinc borders */}
      <CommandDialog 
        open={open} 
        onOpenChange={setOpen}
        className="border-zinc-800 bg-black text-zinc-100"
      >
        <CommandInput 
          placeholder="Type to search..." 
          className="border-none text-black placeholder:text-zinc-600 focus:ring-0"
        />
        <CommandList className="border-t border-zinc-800 bg-black scrollbar-thin scrollbar-thumb-zinc-800">
          <CommandEmpty className="py-6 text-zinc-500">No results found.</CommandEmpty>
          
          <CommandGroup heading="Getting Started" className="text-zinc-500 [&_[cmdk-group-heading]]:text-zinc-500">
            <CommandItem 
              onSelect={() => onSelectAction("/docs/installation")}
              className="data-[selected=true]:bg-zinc-900 data-[selected=true]:text-white cursor-pointer"
            >
              <Terminal className="mr-2 size-4 text-zinc-400" />
              <span>Installation</span>
            </CommandItem>
            <CommandItem 
              onSelect={() => onSelectAction("/docs/structure")}
              className="data-[selected=true]:bg-zinc-900 data-[selected=true]:text-white cursor-pointer"
            >
              <FileText className="mr-2 size-4 text-zinc-400" />
              <span>Project Structure</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator className="bg-zinc-800" />

          <CommandGroup heading="Components" className="text-zinc-500 [&_[cmdk-group-heading]]:text-zinc-500">
            <CommandItem 
              onSelect={() => onSelectAction("/docs/components/button")}
              className="data-[selected=true]:bg-zinc-900 data-[selected=true]:text-white cursor-pointer"
            >
              <Component className="mr-2 size-4 text-zinc-400" />
              <span>Button</span>
            </CommandItem>
            <CommandItem 
              onSelect={() => onSelectAction("/docs/components/input")}
              className="data-[selected=true]:bg-zinc-900 data-[selected=true]:text-white cursor-pointer"
            >
              <Component className="mr-2 size-4 text-zinc-400" />
              <span>Input</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}