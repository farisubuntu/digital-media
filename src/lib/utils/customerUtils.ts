import { tursoClient } from "@/lib/turso";
export async function getCustomer(id: number) {
  const sql = `
 SELECT CustomerId, FirstName, LastName, Company, Email, Phone, Address, City, State, Country, PostalCode, SupportRepId
 FROM Customer
 WHERE CustomerId = ${id}
 `;
  const result = await tursoClient.execute(sql);
  return result.rows;
}
