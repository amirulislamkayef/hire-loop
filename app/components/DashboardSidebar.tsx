'use client'
import {
    LayoutDashboard,
    BriefcaseBusiness,
    Bookmark,
    FileText,
    CreditCard,
    Settings,
    Building2,
    Users,
    type LucideIcon,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"
import { useSession } from "@/lib/auth-client"


export type RoleType = "seeker" | "recruiter" | "admin"

export type MenuItem = {
    /** Unique key for the menu item. */
    id: string
    /** Display label shown in the sidebar. */
    name: string
    /** Route the item links to. */
    url: string
    /** Lucide icon component rendered before the label. */
    icon: LucideIcon
}

// Menu labels/order taken from the HireLoop Figma sidebar component
// ("Nav · <label>" instances per role variant), icons mapped to lucide equivalents.
// Keep in sync with the `role` user.additionalFields enum in lib/auth.ts.
const menuItemsByRole: Record<RoleType, MenuItem[]> = {
    seeker: [
        { id: "dashboard", name: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
        { id: "jobs", name: "Jobs", url: "/browse-jobs", icon: BriefcaseBusiness },
        { id: "saved-jobs", name: "Saved Jobs", url: "/saved-jobs", icon: Bookmark },
        { id: "applications", name: "Applications", url: "/my-applications", icon: FileText },
        { id: "billing", name: "Billing", url: "/billing", icon: CreditCard },
        { id: "settings", name: "Settings", url: "/settings", icon: Settings },
    ],
    recruiter: [
        { id: "dashboard", name: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
        { id: "my-company", name: "My Company", url: "/company", icon: Building2 },
        { id: "manage-jobs", name: "Manage Jobs", url: "/manage-jobs", icon: BriefcaseBusiness },
        { id: "applications", name: "Applications", url: "/my-applications", icon: FileText },
        { id: "settings", name: "Settings", url: "/settings", icon: Settings },
    ],
    admin: [
        { id: "dashboard", name: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
        { id: "users", name: "Users", url: "/users", icon: Users },
        { id: "companies", name: "Companies", url: "/companies", icon: Building2 },
        { id: "jobs", name: "Jobs", url: "/jobs", icon: BriefcaseBusiness },
        { id: "payments", name: "Payments", url: "/payments", icon: CreditCard },
        { id: "settings", name: "Settings", url: "/settings", icon: Settings },
    ],
}

export function DashboardSidebar() {
    const { data: session, isPending } = useSession();
    const role = session?.user?.role || 'seeker';

    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
                <SidebarGroup>
                    <SidebarMenu>
                        {menuItemsByRole[role].map((item) => (
                            <SidebarMenuItem key={item.id}>
                                <SidebarMenuButton render={<a href={item.url} />}>
                                    <item.icon />
                                    <span>{item.name}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
