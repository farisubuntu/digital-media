import { tursoClient } from "../turso";

export async function fetchAllCustomers() {
  const { rows } = await tursoClient.execute("SELECT * FROM customers");
  return rows;
}

export async function fetchAllEmployees() {
  const { rows } = await tursoClient.execute("SELECT * FROM employees");
  return rows;
}

export async function fetchAllInvoices() {
  const { rows } = await tursoClient.execute("SELECT * FROM invoices");
  return rows;
}

export async function fetchAllGenres() {
  const { rows } = await tursoClient.execute("SELECT * FROM genres");
  return rows;
}

export async function fetchAllPlaylists() {
  const { rows } = await tursoClient.execute("SELECT * FROM playlists");
  return rows;
}

export async function fetchAllAlbums() {
  const { rows } = await tursoClient.execute("SELECT * FROM albums");
  return rows;
}

export async function fetchAllTracks() {
  const { rows } = await tursoClient.execute("SELECT * FROM tracks");
  return rows;
}

export async function fetchAllMediaTypes() {
  const { rows } = await tursoClient.execute("SELECT * FROM mediatype");
  return rows;
}

export async function fetchAllArtists() {
  const { rows } = await tursoClient.execute("SELECT * FROM artists");
  return rows;
}
