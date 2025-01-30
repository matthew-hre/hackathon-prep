"use client";

import * as React from "react";
import { Code, Frame, Paperclip, Plus, SquareCheckBig } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavResources } from "@/components/nav-resources";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { signOutAction } from "@/app/dashboard/actions";

const data = {
  navMain: [
    {
      title: "Web II",
      url: "#",
      icon: Code,
      isActive: true,
      items: [
        {
          title: "JavaScript Basics",
          url: "#",
        },
        {
          title: "Fetch API",
          url: "#",
        },
        {
          title: "Async/Await",
          url: "#",
        },
      ],
    },
    {
      title: "New Course",
      url: "#",
      icon: Plus,
    },
  ],
  resources: [
    {
      name: "Flash Cards",
      url: "#",
      icon: Frame,
    },
    {
      name: "Quizzes",
      url: "#",
      icon: SquareCheckBig,
    },
    {
      name: "Practice Problems",
      url: "#",
      icon: Code,
    },
  ],
};

export function AppSidebar({
  user,
  ...props
}: {
  user: {
    name: string;
    email: string;
    image: string;
    id: string;
  };
} & React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-background">
                  <Paperclip className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Hackathon Prep</span>
                  <span className="truncate text-xs">Free Plan</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavResources resources={data.resources} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} signOutAction={signOutAction} />
      </SidebarFooter>
    </Sidebar>
  );
}
