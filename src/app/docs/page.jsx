import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/app-sidebar"

export default function DocsLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-black">
        <AppSidebar />
        <main className="flex-1 bg-black">
          {/* Header area for the trigger and breadcrumbs */}
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-zinc-800 px-4">
            <SidebarTrigger className="text-zinc-400 hover:text-white" />
            <div className="h-4 w-[1px] bg-zinc-800 mx-2" />
            <span className="text-sm font-medium text-zinc-400">Docs / Components</span>
          </header>
          
          <div className="p-8 text-zinc-100">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}