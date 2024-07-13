import { tursoClient } from "../turso";

export async function getCustomerCount() {
  const result = await tursoClient.execute("SELECT * FROM Customer");

  return result.rows.length;
}

export async function getEmployeeCount() {
  const result = await tursoClient.execute("SELECT * FROM Employee");

  return result.rows.length;
}

export async function getAlbumCount() {
  const result = await tursoClient.execute("SELECT * FROM Album");

  return result.rows.length;
}

export async function getGenreCount() {
  const result = await tursoClient.execute("SELECT * FROM Genre");

  return result.rows.length;
}

export async function getInvoiceCount() {
  const result = await tursoClient.execute("SELECT * FROM Invoice");

  return result.rows.length;
}

export async function getPlaylistCount() {
  const result = await tursoClient.execute("SELECT * FROM Playlist");

  return result.rows.length;
}

export async function getTrackCount() {
  const result = await tursoClient.execute("SELECT * FROM Track");

  return result.rows.length;
}

export async function getInvoicesTotal() {
  const result = await tursoClient.execute("SELECT SUM(Invoice.Total) FROM Invoice");

  return Number(result.rows[0][0]);
}

export async function fetchCardData() {
  const [
    customerCount,
    employeeCount,
    albumCount,
    genreCount,
    invoiceCount,
    playlistCount,
    trackCount,
    invoiceTotal,
  ] = await Promise.all([
    getCustomerCount(),
    getEmployeeCount(),
    getAlbumCount(),
    getGenreCount(),
    getInvoiceCount(),
    getPlaylistCount(),
    getTrackCount(),
    getInvoicesTotal(),
  ]);
  return {
    customerCount,
    employeeCount,
    albumCount,
    genreCount,
    invoiceCount,
    playlistCount,
    trackCount,
    invoiceTotal,
  };
}
