<<<<<<< HEAD
"use server";

import { revalidatePath } from "next/cache";
import { getEmployee, getEmployeeCustomers } from "./utils/employeeUtils";

export async function actionGetEmployee(id: number) {
  try {
    const result = await getEmployee(id);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function actionGetEmployeeCustomers(id: number) {
  try {
    const result = await getEmployeeCustomers(id);
    return result;
  } catch (error) {
    console.log(error);
  }
}
=======
import { prismaClient } from "@/lib/prisma";



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

export async function deleteInvoice(id: string) {
  try {
    const res = await prismaClient.invoice.delete({
      where: {
        InvoiceId: Number(id),
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
>>>>>>> vercel-prisma
