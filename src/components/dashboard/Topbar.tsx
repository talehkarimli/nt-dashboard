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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const pageNames: Record<string, string> = {
  '/': 'Dashboard',
  '/visitors': 'Visitors',
  '/companies': 'Companies',
  '/workflows': 'Workflows',
  '/scripts': 'Scripts',
}

export function Topbar() {
  const [scriptEnabled, setScriptEnabled] = useState(true)
  const [showDisableDialog, setShowDisableDialog] = useState(false)
  const location = useLocation()
  const currentPage = pageNames[location.pathname] || 'Dashboard'
  const { toggleSidebar } = useSidebar()

  const handleToggleChange = (checked: boolean) => {
    if (checked) {
      setScriptEnabled(true)
    } else {
      setShowDisableDialog(true)
    }
  }

  const handleConfirmDisable = () => {
    setScriptEnabled(false)
    setShowDisableDialog(false)
  }

  const handleCancelDisable = () => {
    setShowDisableDialog(false)
  }

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
            onCheckedChange={handleToggleChange}
          />
          <span className="hidden sm:inline text-sm font-normal">
            {scriptEnabled ? "Enabled" : "Disabled"}
          </span>
        </div>
      </div>

      <Dialog open={showDisableDialog} onOpenChange={setShowDisableDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              If you do this, you will not be able to identify visitors on your website.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleCancelDisable} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDisable} className="w-full sm:w-auto">
              Disable
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  )
}

