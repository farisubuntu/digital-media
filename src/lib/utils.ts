import { tursoClient } from "./turso";

export async function fetchAllCustomers() {
  const customers = await tursoClient.execute("SELECT * FROM customers");
  return customers;
}

export async function fetchAllEmployees() {
  const employees = await tursoClient.execute("SELECT * FROM employees");
  return employees;
}

export async function fetchAllInvoices() {
  const invoices = await tursoClient.execute("SELECT * FROM invoices");
  return invoices;
}

export async function fetchAllGenres() {
  const genres = await tursoClient.execute("SELECT * FROM genres");
  return genres;
}

export async function fetchAllPlaylists() {
  const playlists = await tursoClient.execute("SELECT * FROM playlists");
  return playlists;
}

export async function fetchAllAlbums() {
  const albums = await tursoClient.execute("SELECT * FROM albums");
  return albums;
}

export async function fetchAllTracks() {
  const tracks = await tursoClient.execute("SELECT * FROM tracks");
  return tracks;
}

export async function fetchAllMediaTypes() {
  const mediaTypes = await tursoClient.execute("SELECT * FROM mediatype");
  return mediaTypes;
}

export async function fetchAllArtists() {
  const artists = await tursoClient.execute("SELECT * FROM artists");
  return artists;
}
