import { tursoClient } from "@/lib/turso";

// interface CustomerInterface {
//   CustomerId: number;
//   FirstName: string;
//   LastName: string;
//   ImageURL: string;
//   Company?: string;
//   Address: string;
//   City?: string;
//   State?: string;
//   Country?: string;
//   PostalCode?: string;
//   Phone?: string;
//   Fax?: string;
//   Email?: string;
//   SupportRepId: number;
//   EmployeeFirstName: string;
//   EmployeeLastName: string;
// }

export async function getCustomers() {
  const sql = `
   SELECT Customer.CustomerId, Customer.FirstName, Customer.LastName,Customer.Company, Customer.Email, Customer.Phone, Customer.Address, Customer.City, Customer.State, Customer.Country, Customer.PostalCode, Customer.SupportRepId, Employee.FirstName, Employee.LastName
   FROM Customer
   JOIN Employee ON Customer.SupportRepId = Employee.EmployeeId
  `;

  const result = await tursoClient.execute(sql);

  return result.rows;
}

export async function getEmployees() {
  const sql = `
  SELECT * FROM Employee
  `;
  const result = await tursoClient.execute(sql);

  return result.rows;
}
