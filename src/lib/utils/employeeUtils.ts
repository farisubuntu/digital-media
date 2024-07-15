import { tursoClient } from "@/lib/turso";

export async function getEmployee(id: number) {
  const sql = `
 SELECT *
 FROM Employee
 WHERE Employee.EmployeeId = ${id}
 `;
  try {
    const result = await tursoClient.execute(sql);

    return result.rows;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getEmployeeCustomers(id: number) {
  const sql = `
  SELECT *
  FROM Customer
  WHERE Customer.SupportRepId = ${id}
  `;
  try {
    const result = await tursoClient.execute(sql);
   
    return result.rows;
  } catch (error) {
    console.log(error);
    return null;
  }
}
