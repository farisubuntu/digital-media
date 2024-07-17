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