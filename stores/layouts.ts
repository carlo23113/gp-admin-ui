import { NavLink } from "@/types/layout";
import { defineStore } from "pinia";
import { Breadcrumb } from "~~/types/components";

export const useLayoutsStore = defineStore("layout", {
  state: () => ({
    navLinks: navLinks as Array<NavLink>,
    sidebar: false as boolean,
    currentTitle: "Dashboard",
  }),
  actions: {},
  getters: {},
});

const navLinks: Array<NavLink> = [
  {
    icon: "mdi-view-dashboard",
    route: "/dashboard",
    title: "Dashboard",
    children: [],
  },
  {
    icon: "mdi-account-group",
    title: "Users",
    children: [
      {
        route: "/users/admins",
        title: "Admins",
      },
      {
        route: "/users/clients",
        title: "Clients",
      },
      {
        route: "/users/staffs",
        title: "Staffs",
      },
    ],
  },
];
