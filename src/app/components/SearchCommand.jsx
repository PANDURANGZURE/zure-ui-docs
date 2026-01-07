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
} from "@/components/ui/command"

export function SearchCommand() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  // Listen for CMD+K or CTRL+K
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
      {/* 1. Visual Trigger for Sidebar */}
      <button
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-sm text-zinc-500 hover:bg-zinc-900 transition-colors"
      >
        <Search className="size-4" />
        <span className="flex-1 text-left">Search docs...</span>
        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-1.5 font-mono text-[10px] font-medium text-zinc-500">
          ⌘K
        </kbd>
      </button>

      {/* 2. The Command Palette */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search components..." />
        <CommandList className="bg-black text-zinc-300">
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Getting Started">
            <CommandItem onSelect={() => onSelectAction("/docs/installation")}>
              <Terminal />
              <span>Installation</span>
            </CommandItem>
            <CommandItem onSelect={() => onSelectAction("/docs/structure")}>
              <FileText />
              <span>Project Structure</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Components">
            <CommandItem onSelect={() => onSelectAction("/docs/components/button")}>
              <Component />
              <span>Button</span>
            </CommandItem>
            <CommandItem onSelect={() => onSelectAction("/docs/components/input")}>
              <Component />
              <span>Input</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}