import { tursoClient } from "@/lib/turso";

export async function getEmployee(id: number) {
  const sql = `
 SELECT *
 FROM Employee
 WHERE Employee.EmployeeId = ${id}
 `;
  try {
    const result = await tursoClient.execute(sql);

    return result.rows[0];
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

export async function fetchEmployeeDetails(id: number) {
  const sql1 = `
 SELECT *
 FROM Employee
 WHERE Employee.EmployeeId = ${id}
 `;
  const sql2 = `
  SELECT *
  FROM Customer
  WHERE Customer.SupportRepId = ${id}
  `;
  try {
    const result1 = tursoClient.execute(sql1);
    const result2 = tursoClient.execute(sql2);

    const [employee, customers] = await Promise.all([result1, result2]);
    return { employee: employee.rows[0], customers: customers.rows };
  } catch (error) {
    console.log(error);
    return null;
  }
}
