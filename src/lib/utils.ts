import prismaClient from "./connection-client";

export async function getAllCustomers() {
  const customers = await prismaClient.customers.findMany();
  const json = JSON.stringify(customers, null, 2);
  return json;
}
