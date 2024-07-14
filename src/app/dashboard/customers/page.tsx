import React from 'react'
import { Breadcrumb, NavigationMenu  } from '@/lib/definitiions'


const breadcrumbs: Breadcrumb[] = [
  {
    label: "Home",
    href: "/",
    active: false,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    active: false,
  },
  {
    label: "Customers",
    href: "/dashboard/customers",
    active: true,
  },
];

export const metadata = {
  title: 'Customers',
}


export default function CustomersPage() {
  return (
    <>

    </>
  )
}
