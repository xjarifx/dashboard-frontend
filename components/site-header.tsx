import { SidebarTrigger } from "@/components/ui/sidebar"
import { LayoutDashboardIcon, SearchIcon } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-(--header-height) shrink-0 items-center border-b border-border/70 bg-background/95 backdrop-blur-sm transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-3 px-4 lg:px-6">
        <SidebarTrigger className="-ml-1 size-8 rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground" />
        <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
          <span className="text-muted-foreground/40 select-none">/</span>
          <span className="flex items-center gap-1.5 font-medium text-foreground">
            <LayoutDashboardIcon className="size-3.5 shrink-0 text-primary" />
            Overview
          </span>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="hidden h-7 cursor-pointer items-center gap-2 rounded-md border border-border/80 bg-muted/30 px-3 text-xs text-muted-foreground transition-all duration-150 hover:border-border hover:bg-muted/60 hover:text-foreground sm:flex"
          >
            <SearchIcon className="size-3 shrink-0" />
            <span>Search</span>
            <kbd className="pointer-events-none ml-1 hidden select-none items-center gap-0.5 rounded border border-border bg-background px-1 font-mono text-[10px] opacity-60 sm:inline-flex">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>
    </header>
  )
}
