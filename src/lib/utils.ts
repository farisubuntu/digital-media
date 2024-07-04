import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function getAllCustomers() {
  const customers = await prismaClient.customers.findMany();
  const json = JSON.stringify(customers, null, 2);
  return json;
}

export async function getInvoicesWithDate(from: Date | any, to: Date | any) {
  const res = await prismaClient.invoices.findMany({
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
  const res: any = await prismaClient.invoices.aggregate({
    _sum: {
      Total: true,
    },
  });

  return res._sum.Total.toFixed(2).toString();
}

export async function getInvoicesCount() {
  const res = await prismaClient.invoices.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all;
  // console.log("count", count);

  return count;
}

export async function getCustomersCount() {
  const res = await prismaClient.customers.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}
export async function getEmployeesCount() {
  const res = await prismaClient.employees.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}

export async function getPlaylistsCount() {
  const res = await prismaClient.playlists.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}

export async function getAlbumsCount() {
  const res = await prismaClient.albums.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}
export async function getArtistsCount() {
  const res = await prismaClient.artists.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}

export async function getCustomerDetails(id: string) {
  const res = await prismaClient.customers.findUnique({
    where: {
      CustomerId: Number(id),
    },
    include: {
      invoices: true,
      employees: true,
    },
  });
  return res;
}

export async function deleteCustomer(id: string) {
  try {
    const res = await prismaClient.customers.delete({
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

export async function getCustomerInvoices(customerId: string) {
  const res = await prismaClient.invoices.findMany({
    where: {
      CustomerId: Number(customerId),
    },
  });

  return [...res];
}
