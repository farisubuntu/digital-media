import prismaClient from "@lib/connection-client";
import type { Employee,Invoice, Customer,Invoice_Item } from "@prisma/client";

export async function getAllCustomers() {
  const customers = await prismaClient.customer.findMany();

  return customers;
}
export async function getAllEmployees() {
  const employees = await prismaClient.employee.findMany();

  return employees;
}
export async function getAllInvoices() {
  const invoices = await prismaClient.invoice.findMany();

  return invoices;
}

export async function getInvoicesWithDate(from: Date | any, to: Date | any) {
  const res = await prismaClient.invoice.findMany({
    where: {
      InvoiceDate: {
        gte: from,
        lte: to,
      },
    },
  });

  return res;
}

export async function getInvoicesTotal() {
  const res: any = await prismaClient.invoice.aggregate({
    _sum: {
      Total: true,
    },
  });

  return res._sum.Total.toFixed(2).toString();
}

export async function getInvoicesCount() {
  const res = await prismaClient.invoice.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all;
  // console.log("count", count);

  return count;
}

export async function getCustomersCount() {
  const res = await prismaClient.customer.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}
export async function getEmployeesCount() {
  const res = await prismaClient.employee.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}

export async function getPlaylistsCount() {
  const res = await prismaClient.playlist.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}

export async function getAlbumsCount() {
  const res = await prismaClient.album.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}
export async function getArtistsCount() {
  const res = await prismaClient.artist.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}

export async function getCustomerDetails(id: string) {
  const res = await prismaClient.customer.findUnique({
    where: {
      CustomerId: Number(id),
    },
  });

  return res;
}

export async function getEmployeeDetails(
  employeeId: number | null
): Promise<Employee | null> {
  const res = await prismaClient.employee.findUnique({
    where: {
      EmployeeId: Number(employeeId),
    },
  });
  if (!res) {
    return null;
  }

  return res;
}
export async function deleteCustomer(id: string) {
  try {
    const res = await prismaClient.customer.delete({
      where: {
        CustomerId: Number(id),
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function getCustomerInvoices(customerId: number | string) {
  const res = await prismaClient.invoice.findMany({
    where: {
      CustomerId: Number(customerId),
    },
  });

  return res;
}

export async function getInvoiceItems(invoiceId: number) {
  const res = await prismaClient.invoice_Item.findMany({
    where: {
      InvoiceId: Number(invoiceId),
    },
  });
  return res;
}
