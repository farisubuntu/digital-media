import { prisma } from "@/connect";

export async function getInvoicesWithDate({ from, to }) {
  const res = await prisma.invoices.findMany({
    where: {
      InvoiceDate: {
        gte: from,
        lte: to,
      },
    },
  });
  const data = await res.json();
  return data;
}

export async function getInvoicesTotal() {
  const res = await prisma.invoices.aggregate({
    _sum: {
      Total: true,
    },
  });

  return res._sum.Total.toFixed(2).toString();
}

export async function getInvoicesCount() {
  const res = await prisma.invoices.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all;
  // console.log("count", count);

  return count;
}

export async function getCustomersCount() {
  const res = await prisma.customers.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}
export async function getEmployeesCount() {
  const res = await prisma.employees.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}

export async function getPlaylistsCount() {
  const res = await prisma.playlists.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}

export async function getAlbumsCount() {
  const res = await prisma.albums.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}
export async function getArtistsCount() {
  const res = await prisma.artists.aggregate({
    _count: {
      _all: true,
    },
  });
  const count = res._count._all.toString();
  return count;
}
