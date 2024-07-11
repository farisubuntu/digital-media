import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

import type {
  Employee,
  Invoice,
  Customer,
  Invice_Item,
  Artist,
  Album,
  Playlist,
  Track,
} from "@prisma/client";

export async function getAllCustomers(): Promise<Customer[]> {
  const customers = await prismaClient.customer.findMany();

  return customers;
}
export async function getAllEmployees(): Promise<Employee[]> {
  const employees = await prismaClient.employee.findMany();

  return employees;
}
export async function getAllEmployeeCustomers(employeeId: number) {
  const customers: Customer[] | null = await prismaClient.customer.findMany({
    where: {
      CustomerId: Number(employeeId),
    },
  });
  if (customers.length > 0) {
    return customers;
  } else {
    return 0;
  }
}
export async function getAllTracks(): Promise<Track[]> {
  const tracks = await prismaClient.track.findMany();

  return tracks;
}
export async function getAllPlaylists(): Promise<Playlist[]> {
  const playlists = await prismaClient.playlist.findMany();

  return playlists;
}
export async function getAllAlbums(): Promise<Album[]> {
  const albums = await prismaClient.album.findMany();

  return albums;
}

export async function getAllInvoices(): Promise<Invoice[]> {
  const invoices = await prismaClient.invoice.findMany();

  return invoices;
}
export async function getAllArtists(): Promise<Artist[]> {
  const artists = await prismaClient.artist.findMany();

  return artists;
}
export async function getArtistName(artistId: string | any) {
  const res = await prismaClient.artist.findUnique({
    where: {
      ArtistId: Number(artistId),
    },
  });
  return res;
}

export async function getTracksLength(albumId: string | any) {
  const res = await prismaClient.track.count({
    where: {
      AlbumId: Number(albumId),
    },
  });
  return res;
}
export async function getAlbumTracks(albumId: string | any) {
  const res = await prismaClient.track.findMany({
    where: {
      AlbumId: Number(albumId),
    },
  });
  return res;
}

export async function getInvoiceDetails(invoiceId: string | any) {
  try {
    const invoiceData = await prismaClient.invoice.findUnique({
      where: {
        InvoiceId: Number(invoiceId),
      },
    });
    const itemsData = await prismaClient.invice_Item.findMany({
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
  const res = await prismaClient.invoice.findUnique({
    where: {
      InvoiceId: Number(invoiceId),
    },
  });
  return res;
}
export async function getInvoicesTotal() {
  const res = await prismaClient.invoice.aggregate({
    _sum: {
      Total: true,
    },
  });
  // console.log(res);
  return res._sum.Total;
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
  const playlistsCount = await prismaClient.playlist.count();

  return playlistsCount | 0;
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
export async function getTracksInAlbum(albumId: string | any) {
  const res = await prismaClient.track.findMany({
    where: {
      AlbumId: Number(albumId),
    },
  });
  return res;
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

export async function getEmployeeDetails(employeeId: number | string | any) {
  if (employeeId === undefined || employeeId === null) return null;

  console.log(employeeId);
  const res: Employee | null = await prismaClient.employee.findUnique({
    where: {
      EmployeeId: Number(employeeId),
    },
  });
  if (res) return res;
  else return null;
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

export async function getCustomerInvoices(customerId: number) {
  const res: Invoice[]  = await prismaClient.invoice.findMany({
    where: {
      CustomerId: Number(customerId),
    },

  });
  return res;
}

export async function getInvoiceItems(invoiceId: number) {
  const res = await prismaClient.invice_Item.findMany({
    where: {
      InvoiceId: Number(invoiceId),
    },
  });
  return res;
}

export { prismaClient };
