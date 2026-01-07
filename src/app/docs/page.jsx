import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/ui/sidebar" // Or your specific path

export default function DocsLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-8 bg-white">
          
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}