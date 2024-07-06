import { ReactNode } from "react";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

interface MenuLink {
  label: string;
  href: string;
  icon?: any;
}

interface NavigationMenu {
  label: string;
  href: string;
  current?: boolean;
}
interface StatCardInterface {
  title: string;
  icon?: ReactNode | string;
  value: string | number;
}

export type { Breadcrumb, MenuLink, NavigationMenu, StatCardInterface };
