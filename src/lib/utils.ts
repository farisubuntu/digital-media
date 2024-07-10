import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

import type {
  employees,
  invoices,
  customers,
  invoice_items,
  artists,
  albums,
} from "@prisma/client";

export async function getAllCustomers(): Promise<customers[]> {
  const customers = await prismaClient.customers.findMany();

  return customers;
}
export async function getAllEmployees(): Promise<employees[]> {
  const employees = await prismaClient.employees.findMany();

  return employees;
}
export async function getAllEmployeeCustomers(
  employeeId: number
) {
  const customers = await prismaClient.customers.findMany({
    where: {
      SupportRepId: employeeId,
    },
  });
  if (customers.length > 0) {
    return customers;
  }
  else{
  return null;
  }
}
export async function getAllTracks(): Promise<tracks[]> {
  const tracks = await prismaClient.tracks.findMany();

  return tracks;
}
export async function getAllPlaylists(): Promise<playlists[]> {
  const playlists = await prismaClient.playlists.findMany();

  return playlists;
}
export async function getAllAlbums(): Promise<albums[]> {
  const albums = await prismaClient.albums.findMany();

  return albums;
}
export async function getAllInvoices(): Promise<invoices[]> {
  const invoices = await prismaClient.invoices.findMany();

  return invoices;
}
export async function getAllArtists(): Promise<artists[]> {
  const artists = await prismaClient.artists.findMany();

  return artists;
}
export async function getArtistName(artistId: string | any) {
  const res = await prismaClient.artists.findUnique({
    where: {
      ArtistId: Number(artistId),
    },
  });
  return res;
}

export async function getTracksLength(albumId: string | any) {
  const res = await prismaClient.tracks.count({
    where: {
      AlbumId: Number(albumId),
    },
  });
  return res;
}
export async function getAlbumTracks(albumId: string | any) {
  const res = await prismaClient.tracks.findMany({
    where: {
      AlbumId: Number(albumId),
    },
  });
  return res;
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

export async function getInvoiceDetails(invoiceId: string | any) {
  try {
    const invoiceData = await prismaClient.invoices.findUnique({
      where: {
        InvoiceId: Number(invoiceId),
      },
    });
    const itemsData = await prismaClient.invoice_items.findMany({
      where: {
        InvoiceId: Number(invoiceId),
      },
    });
    return { invoiceData, itemsData };
  } catch (err) {
    console.log(err);
  }
}
export async function getInvoice(invoiceId: string | any) {
  const res = await prismaClient.invoices.findUnique({
    where: {
      InvoiceId: Number(invoiceId),
    },
  });
  return res;
}
export async function getInvoicesTotal() {
  const res = await prismaClient.invoices.aggregate({
    _sum: {
      Total: true,
    },
  });
  // console.log(res);
  return res._sum.Total;
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
  const playlistsCount = await prismaClient.playlists.count();

  return playlistsCount | 0;
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
export async function getTracksInAlbum(albumId: string | any) {
  const res = await prismaClient.tracks.findMany({
    where: {
      AlbumId: Number(albumId),
    },
  });
  return res;
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
  });

  return res;
}

export async function getEmployeeDetails(employeeId: number) {
  const res = await prismaClient.employees.findUnique({
    where: {
      EmployeeId: Number(employeeId),
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

export async function getCustomerInvoices(customerId: number | string) {
  const res = await prismaClient.invoices.findMany({
    where: {
      CustomerId: Number(customerId),
    },
  });

  return res;
}

export async function getInvoiceItems(invoiceId: number) {
  const res = await prismaClient.invoice_items.findMany({
    where: {
      InvoiceId: Number(invoiceId),
    },
  });
  return res;
}

export { prismaClient };
