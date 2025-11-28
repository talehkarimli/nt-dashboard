import { ChevronRight, Menu } from "lucide-react"
import { useState } from "react"
import { useLocation } from "react-router-dom"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const pageNames: Record<string, string> = {
  '/': 'Dashboard',
  '/visitors': 'Visitors',
  '/companies': 'Companies',
  '/workflows': 'Workflows',
  '/scripts': 'Scripts',
}

export function Topbar() {
  const [scriptEnabled, setScriptEnabled] = useState(true)
  const location = useLocation()
  const currentPage = pageNames[location.pathname] || 'Dashboard'
  const { toggleSidebar } = useSidebar()

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 justify-between">
      <div className="flex items-center gap-2 px-2 md:px-4">
        {/* Desktop - Original Sidebar Trigger */}
        <SidebarTrigger className="-ml-1 hidden md:flex" />
        
        {/* Mobile - Hamburger Menu */}
        <Button
          variant="ghost"
          size="icon"
          className="-ml-1 h-8 w-8 md:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Script Status Toggle */}
      <div className="flex items-center gap-3 px-2 md:px-4 py-2 mr-2 md:mr-4 border border-border rounded-lg bg-background">
        <Label htmlFor="script-status" className="text-sm font-normal cursor-pointer">
          Script status
        </Label>
        <div className="flex items-center gap-2">
          <Switch 
            id="script-status"
            checked={scriptEnabled}
            onCheckedChange={setScriptEnabled}
          />
          <span className="hidden sm:inline text-sm font-normal">
            {scriptEnabled ? "Enabled" : "Disabled"}
          </span>
        </div>
      </div>
    </header>
  )
}

