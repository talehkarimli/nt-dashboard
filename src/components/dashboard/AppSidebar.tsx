import { 
  Globe, 
  Users, 
  Building, 
  Workflow, 
  Code,
  ChevronDown,
  LayoutDashboard,
  Info
} from "lucide-react"
import { useLocation, Link } from "react-router-dom"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const data = {
  user: {
    name: "Tal Karimli",
    email: "tal@nanotarget.com",
    avatar: "/avatars/tal.png",
  },
  website: {
    name: "Tal's website",
    url: "#",
    icon: Globe,
  },
  identification: [
    {
      title: "Visitors",
      url: "/visitors",
      icon: Users,
    },
    {
      title: "Companies",
      url: "/companies",
      icon: Building,
    },
  ],
  automation: [
    {
      title: "Workflows",
      url: "/workflows",
      icon: Workflow,
    },
    {
      title: "Scripts",
      url: "/scripts",
      icon: Code,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center px-2 py-3" style={{ paddingTop: '0.9rem' }}>
              <img 
                src="/logo.svg" 
                alt="NanoTarget Logo" 
                className="h-5 w-auto"
              />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* Website Dropdown */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="bg-white border border-border hover:bg-white">
                    <data.website.icon className="size-4" />
                    <span>{data.website.name}</span>
                    <ChevronDown className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>
                    <span>Website Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Analytics</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Dashboard Menu */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={location.pathname === "/"}>
                <Link to="/">
                  <LayoutDashboard className="size-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Identification Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Identification</SidebarGroupLabel>
          <SidebarMenu>
            {data.identification.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                  <Link to={item.url}>
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {/* Automation Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Automation</SidebarGroupLabel>
          <SidebarMenu>
            {data.automation.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                  <Link to={item.url}>
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {/* Subscription Limit */}
        <div className="flex justify-center py-3 mb-2">
          <div className="rounded-lg border bg-card p-3" style={{ width: '224px' }}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  Credits
                </span>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button 
                      type="button"
                      className="inline-flex items-center justify-center rounded-md text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                    >
                      <Info className="h-3.5 w-3.5" />
                      <span className="sr-only">Credits information</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs" sideOffset={5}>
                    <p className="text-xs">
                      Credits are used to track your usage across all features. Each action consumes a certain amount of credits based on complexity and resource requirements.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-center justify-between">
                <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden mr-3">
                  <div 
                    className="h-full bg-primary transition-all" 
                    style={{ width: '30%' }}
                  />
                </div>
                <span className="text-xs font-semibold tabular-nums">
                  300 / 1,000
                </span>
              </div>
            </div>
          </div>
        </div>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

