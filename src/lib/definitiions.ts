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

interface NavigationMenu{
  label: string;
  href: string;
  current: boolean
}
export type { Breadcrumb, MenuLink, NavigationMenu };
