import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/app-sidebar"

export default function DocsLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-black">
        <AppSidebar />

        <main className="flex-1 bg-black">
          <header className="flex h-16 items-center gap-2 border-b border-zinc-800 px-4">
            <SidebarTrigger className="text-zinc-400 hover:text-white " />
            <span className="text-sm text-zinc-400">Docs</span>
          </header>

          <div className="p-8 text-zinc-100">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
