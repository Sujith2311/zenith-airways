import React, { useState } from 'react';
import { 
  LayoutDashboard,
  Users,
  Plane,
  MapPin,
  Cloud,
  Shield,
  AlertTriangle,
  Settings,
  BarChart3,
  Radio,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar
} from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';
import { NavLink, useLocation } from 'react-router-dom';

const navigationItems = [
  {
    title: 'Mission Control',
    items: [
      { title: 'Dashboard', url: '/', icon: LayoutDashboard },
      { title: 'Station Operations', url: '/operations', icon: Radio },
      { title: 'Alert Center', url: '/alerts', icon: AlertTriangle },
    ]
  },
  {
    title: 'Flight Operations',
    items: [
      { title: 'Aircraft Management', url: '/aircraft', icon: Plane },
      { title: 'Gate Operations', url: '/gates', icon: MapPin },
      { title: 'Weather Center', url: '/weather', icon: Cloud },
    ]
  },
  {
    title: 'Personnel',
    items: [
      { title: 'Crew Hub', url: '/crew', icon: Users },
      { title: 'Security Center', url: '/security', icon: Shield },
    ]
  },
  {
    title: 'Analytics',
    items: [
      { title: 'Performance', url: '/analytics', icon: BarChart3 },
      { title: 'Settings', url: '/settings', icon: Settings },
    ]
  }
];

interface AirlineLayoutProps {
  children: React.ReactNode;
}

function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === 'collapsed';

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "hover:bg-sidebar-accent/50";

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-radar flex items-center justify-center">
            <Plane className="h-5 w-5 text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="font-bold text-sidebar-foreground">Zenith Airways</h2>
              <p className="text-xs text-sidebar-foreground/60">Mission Control</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        {navigationItems.map((section) => (
          <SidebarGroup key={section.title}>
            {!isCollapsed && (
              <SidebarGroupLabel className="text-sidebar-foreground/60 text-xs font-medium mb-2">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} end className={getNavCls}>
                        <div className="flex items-center gap-3 w-full">
                          <item.icon className="h-4 w-4 flex-shrink-0" />
                          {!isCollapsed && (
                            <span className="truncate">{item.title}</span>
                          )}
                          {!isCollapsed && item.title === 'Alert Center' && (
                            <Badge variant="destructive" className="ml-auto text-xs px-1.5 py-0.5">
                              3
                            </Badge>
                          )}
                        </div>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

export default function AirlineLayout({ children }: AirlineLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="h-14 flex items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-accent hover:text-accent-foreground" />
              <div className="h-6 w-px bg-border" />
              <h1 className="font-semibold text-foreground">Airline Management Platform</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-muted-foreground">All Systems Operational</span>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <div className="p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}