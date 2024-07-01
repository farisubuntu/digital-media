"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/connect";

export async function actionDeleteCustomer(id) {
 console.log("id", id);
 

  // delete the customer and all 
  revalidatePath("/chinook/dashboard/customers");
  redirect("/chinook/dashboard/customers");
}
