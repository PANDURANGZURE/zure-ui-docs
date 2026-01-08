import { SidebarContent, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/app-sidebar"
import { SearchCommand } from "../components/SearchCommand" // Import your search component
import Toc from "../components/Toc"
import { DocsTocSidebar } from "../components/docs-toc-sidebar"

export default function DocsLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-black text-zinc-100">
        <AppSidebar />
        
        <main className="flex-1 flex flex-col">
          {/* ---------- THE HEADER ---------- */}
          <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between border-b border-zinc-800 bg-black/50 px-4 backdrop-blur">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="text-zinc-400 hover:text-white" />
              <div className="h-4 w-[1px] bg-zinc-800 mx-2" />
              <span className="text-sm font-medium text-zinc-400">Zure UI / Docs</span>
            </div>

            {/* Put the search here so it's always accessible */}
            <div className="w-full max-w-sm ml-4">
              <SearchCommand />
            </div>

            <div className="flex items-center gap-4">
               {/* You can add GitHub/Twitter icons here later */}
            </div>
          </header>

          {/* ---------- MAIN CONTENT ---------- */}
          <div className="flex-1 p-8">
            {children}
          </div>
          <SidebarContent>
            <DocsTocSidebar/>
          </SidebarContent>
        </main>
        
      </div>
    </SidebarProvider>
  )
}