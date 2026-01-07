import { 
  BookOpen, 
  Code2, 
  Settings2, 
  Terminal, 
  LayoutDashboard, 
  Component 
} from "lucide-react"

export const sidebarData = {
  user: {
    name: "Developer",
    email: "dev@zure-ui.com",
    avatar: "/avatars/dev.jpg",
  },
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      icon: Terminal,
      isActive: true, // This will be open by default
      items: [
        { title: "Installation", url: "/docs/installation" },
        { title: "Project Structure", url: "/docs/structure" },
        { title: "CLI Reference", url: "/docs/cli" },
      ],
    },
    {
      title: "Components",
      url: "#",
      icon: Component,
      items: [
        { title: "Buttons", url: "/docs/components/button" },
        { title: "Inputs", url: "/docs/components/input" },
        { title: "Data Table", url: "/docs/components/data-table" },
        { title: "Modals", url: "/docs/components/modal" },
      ],
    },
    {
      title: "API Reference",
      url: "#",
      icon: Code2,
      items: [
        { title: "Authentication", url: "/docs/api/auth" },
        { title: "Endpoints", url: "/docs/api/endpoints" },
        { title: "Webhooks", url: "/docs/api/webhooks" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "General", url: "/docs/settings/general" },
        { title: "Team", url: "/docs/settings/team" },
        { title: "Billing", url: "/docs/settings/billing" },
      ],
    },
  ],
}